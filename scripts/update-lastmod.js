#!/usr/bin/env node
// Regenerates data/sitemapMeta.json, the source of truth app/sitemap.ts reads from.
//
// lastmod comes from git history (`git log -1` per page.tsx) - the authoritative
// last-edit date in this codebase, since there's no CMS/database. priority and
// changefreq are carried forward from the existing entry when a page is already
// known, or assigned a sensible default (by URL depth) for newly discovered pages.
//
// IMPORTANT: run this AFTER committing your changes, not before. It reads dates
// from git history, so anything you haven't committed yet has no history to read -
// this script will refuse to run rather than guess a date for it (see below).
//
// Usage: node scripts/update-lastmod.js

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const APP_DIR = path.join(ROOT, 'app');
const OUT_FILE = path.join(ROOT, 'data', 'sitemapMeta.json');
const BASE_URL = 'https://chemsolved.com';

// If one single date ends up covering more than this fraction of all pages,
// something is more likely wrong (e.g. a shallow git clone, where `git log`
// happily returns A date for every file - just the wrong one, the single
// commit depth-1 gives you - silently reproducing the original uniform-lastmod
// bug) than every one of those pages genuinely having been last touched on the
// same day. The largest legitimate same-day cluster seen in this repo's real
// history so far is ~52% (a mass structured-data commit touching 115 pages).
const SUSPICIOUS_SAME_DATE_FRACTION = 0.85;

const LEGAL_PATHS = new Set(['/privacy', '/terms', '/disclaimer', '/editorial-policy']);

function findPageFiles(dir, out) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      findPageFiles(full, out);
    } else if (entry.name === 'page.tsx' || entry.name === 'page.ts') {
      out.push(full);
    }
  }
  return out;
}

function filePathToUrlPath(filePath) {
  const rel = path.relative(APP_DIR, path.dirname(filePath)).split(path.sep).join('/');
  return rel === '.' ? '/' : `/${rel}`;
}

function defaultMetaFor(urlPath) {
  if (urlPath === '/') return { changefreq: 'daily', priority: '1.0' };
  if (LEGAL_PATHS.has(urlPath)) return { changefreq: 'yearly', priority: '0.3' };
  const segments = urlPath.split('/').filter(Boolean);
  if (segments.length === 1) return { changefreq: 'weekly', priority: '0.8' };
  if (segments.length === 2 && segments[0] === 'chemistry-formulas') return { changefreq: 'monthly', priority: '0.6' };
  if (segments.length === 2) return { changefreq: 'monthly', priority: '0.7' };
  return { changefreq: 'monthly', priority: '0.6' };
}

function isCommittedInHead(relPath) {
  try {
    execSync(`git cat-file -e HEAD:"${relPath}"`, { cwd: ROOT, stdio: 'ignore' });
    return true;
  } catch (e) {
    return false;
  }
}

function fail(lines) {
  console.error('update-lastmod.js: refusing to write data/sitemapMeta.json.\n');
  for (const l of lines) console.error(l);
  console.error('\nNo file was written - the previously committed data/sitemapMeta.json is untouched.');
  process.exit(1);
}

const existing = fs.existsSync(OUT_FILE) ? JSON.parse(fs.readFileSync(OUT_FILE, 'utf8')) : {};

const pageFiles = findPageFiles(APP_DIR, []);
const result = {};
const missingHistory = [];

for (const file of pageFiles) {
  const urlPath = filePathToUrlPath(file);
  const loc = urlPath === '/' ? BASE_URL : `${BASE_URL}${urlPath}`;
  const relFromRoot = path.relative(ROOT, file).split(path.sep).join('/');

  let lastmod;
  try {
    lastmod = execSync(`git log -1 --format=%cd --date=short -- "${relFromRoot}"`, { cwd: ROOT })
      .toString()
      .trim() || null;
  } catch (e) {
    lastmod = null;
  }

  if (!lastmod) {
    if (isCommittedInHead(relFromRoot)) {
      missingHistory.push(`  - ${relFromRoot}: committed in HEAD, but "git log" returned no history for it. This ` +
        `usually means a shallow clone (try "git fetch --unshallow") or a corrupted/incomplete repo copy.`);
    } else {
      missingHistory.push(`  - ${relFromRoot}: not committed yet. Commit it first, then re-run this script.`);
    }
    continue;
  }

  const prior = existing[loc];
  const fallback = defaultMetaFor(urlPath);
  result[loc] = {
    lastmod,
    changefreq: prior?.changefreq || fallback.changefreq,
    priority: prior?.priority || fallback.priority,
  };
}

if (missingHistory.length > 0) {
  fail([
    `${missingHistory.length} page(s) have no usable git history:`,
    ...missingHistory,
  ]);
}

// Guard: a shallow clone doesn't error - it just gives every file the same
// (wrong) single commit date. Catch that shape even though no individual
// lookup failed.
const dateCounts = {};
for (const entry of Object.values(result)) {
  dateCounts[entry.lastmod] = (dateCounts[entry.lastmod] || 0) + 1;
}
const total = Object.keys(result).length;
const [worstDate, worstCount] = Object.entries(dateCounts).sort((a, b) => b[1] - a[1])[0] || [null, 0];
if (total > 0 && worstCount / total > SUSPICIOUS_SAME_DATE_FRACTION) {
  fail([
    `${worstCount} of ${total} pages (${Math.round((worstCount / total) * 100)}%) all resolved to the identical ` +
      `lastmod date (${worstDate}). That's far above what this repo's real edit history has ever produced ` +
      `(worst case so far: ~52%) and is the signature of a shallow git clone silently reproducing the original ` +
      `uniform-lastmod bug: "git log" doesn't error in a shallow clone, it just returns the one commit it has for ` +
      `every file.`,
    `Run "git rev-parse --is-shallow-repository" to check, and "git fetch --unshallow" if it prints "true".`,
  ]);
}

fs.writeFileSync(OUT_FILE, JSON.stringify(result, null, 2) + '\n', 'utf8');
console.log(`Wrote ${Object.keys(result).length} entries to ${path.relative(ROOT, OUT_FILE)}`);
