#!/usr/bin/env node
// Regenerates data/sitemapMeta.json, the source of truth app/sitemap.ts reads from.
//
// lastmod comes from git history (`git log -1` per page.tsx) - the authoritative
// last-edit date in this codebase, since there's no CMS/database. priority and
// changefreq are carried forward from the existing entry when a page is already
// known, or assigned a sensible default (by URL depth) for newly discovered pages.
//
// Run before each deploy / sitemap resubmission: node scripts/update-lastmod.js

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const APP_DIR = path.join(ROOT, 'app');
const OUT_FILE = path.join(ROOT, 'data', 'sitemapMeta.json');
const BASE_URL = 'https://chemsolved.com';

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

const existing = fs.existsSync(OUT_FILE) ? JSON.parse(fs.readFileSync(OUT_FILE, 'utf8')) : {};

const pageFiles = findPageFiles(APP_DIR, []);
const result = {};

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
    // untracked/new file with no git history yet - use today
    lastmod = new Date().toISOString().slice(0, 10);
  }
  const prior = existing[loc];
  const fallback = defaultMetaFor(urlPath);
  result[loc] = {
    lastmod,
    changefreq: prior?.changefreq || fallback.changefreq,
    priority: prior?.priority || fallback.priority,
  };
}

fs.writeFileSync(OUT_FILE, JSON.stringify(result, null, 2) + '\n', 'utf8');
console.log(`Wrote ${Object.keys(result).length} entries to ${path.relative(ROOT, OUT_FILE)}`);
