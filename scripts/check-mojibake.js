#!/usr/bin/env node
// Scans app/, components/, and data/ for leftover double-encoded UTF-8 ("mojibake").
//
// Two distinct historical bugs produced this: correct UTF-8 bytes got decoded using
// the wrong codepage and re-saved as UTF-8.
//   1. Windows-1252 misread (commit 4034b0d, 83 files) - mangled superscripts/degree signs
//   2. CP437/OEM misread (commit 3e5c525, app/page.tsx) - mangled Greek letters/subscripts
// Both passes run here so either kind is caught.
//
// Usage: node scripts/check-mojibake.js [scan|fix] [path]
// Exits non-zero (and lists offending files) if anything is still affected.

const fs = require('fs');
const path = require('path');

const MODE = process.argv[2] || 'scan';
const ROOT = process.argv[3] || process.cwd();

const EXT = new Set(['.ts', '.tsx', '.js', '.jsx', '.json', '.mdx', '.md', '.csv']);
const SKIP_DIRS = new Set(['node_modules', '.git', '.next', 'out', 'dist']);

// windows-1252 byte -> unicode codepoint, for bytes 0x80-0x9F (the range that differs from Latin-1)
const WIN1252_80_9F = [
  0x20AC, 0x0081, 0x201A, 0x0192, 0x201E, 0x2026, 0x2020, 0x2021,
  0x02C6, 0x2030, 0x0160, 0x2039, 0x0152, 0x008D, 0x017D, 0x008F,
  0x0090, 0x2018, 0x2019, 0x201C, 0x201D, 0x2022, 0x2013, 0x2014,
  0x02DC, 0x2122, 0x0161, 0x203A, 0x0153, 0x009D, 0x017E, 0x0178,
];
const WIN1252_MAP = new Map();
for (let b = 0x00; b <= 0x7f; b++) WIN1252_MAP.set(b, b);
for (let b = 0xa0; b <= 0xff; b++) WIN1252_MAP.set(b, b);
WIN1252_80_9F.forEach((cp, i) => WIN1252_MAP.set(cp, 0x80 + i));

// CP437 (OEM/DOS codepage) byte -> unicode codepoint, for bytes 0x80-0xFF
const CP437_80_FF = [
  0x00C7,0x00FC,0x00E9,0x00E2,0x00E4,0x00E0,0x00E5,0x00E7,0x00EA,0x00EB,0x00E8,0x00EF,0x00EE,0x00EC,0x00C4,0x00C5,
  0x00C9,0x00E6,0x00C6,0x00F4,0x00F6,0x00F2,0x00FB,0x00F9,0x00FF,0x00D6,0x00DC,0x00A2,0x00A3,0x00A5,0x20A7,0x0192,
  0x00E1,0x00ED,0x00F3,0x00FA,0x00F1,0x00D1,0x00AA,0x00BA,0x00BF,0x2310,0x00AC,0x00BD,0x00BC,0x00A1,0x00AB,0x00BB,
  0x2591,0x2592,0x2593,0x2502,0x2524,0x2561,0x2562,0x2556,0x2555,0x2563,0x2551,0x2557,0x255D,0x255C,0x255B,0x2510,
  0x2514,0x2534,0x252C,0x251C,0x2500,0x253C,0x255E,0x255F,0x255A,0x2554,0x2569,0x2566,0x2560,0x2550,0x256C,0x2567,
  0x2568,0x2564,0x2565,0x2559,0x2558,0x2552,0x2553,0x256B,0x256A,0x2518,0x250C,0x2588,0x2584,0x258C,0x2590,0x2580,
  0x03B1,0x00DF,0x0393,0x03C0,0x03A3,0x03C3,0x00B5,0x03C4,0x03A6,0x0398,0x03A9,0x03B4,0x221E,0x03C6,0x03B5,0x2229,
  0x2261,0x00B1,0x2265,0x2264,0x2320,0x2321,0x00F7,0x2248,0x00B0,0x2219,0x00B7,0x221A,0x207F,0x00B2,0x25A0,0x00A0,
];
const CP437_MAP = new Map();
for (let b = 0x00; b <= 0x7f; b++) CP437_MAP.set(b, b);
CP437_80_FF.forEach((cp, i) => {
  if (!CP437_MAP.has(cp)) CP437_MAP.set(cp, 0x80 + i);
});

function walk(dir, out) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (EXT.has(path.extname(entry.name))) out.push(full);
  }
  return out;
}

function fixWithMap(text, codepointToByte) {
  let result = '';
  let changed = false;
  const runs = [];
  const chars = Array.from(text);
  let i = 0;
  while (i < chars.length) {
    const code = chars[i].codePointAt(0);
    if (codepointToByte.has(code) && code > 0x7f) {
      let j = i;
      const runChars = [];
      while (j < chars.length) {
        const c = chars[j].codePointAt(0);
        if (codepointToByte.has(c) && c > 0x7f) {
          runChars.push(c);
          j++;
        } else break;
      }
      const bytes = Buffer.from(runChars.map((c) => codepointToByte.get(c)));
      let decoded = null;
      try {
        decoded = new TextDecoder('utf-8', { fatal: true }).decode(bytes);
      } catch (e) {
        decoded = null;
      }
      const original = runChars.map((c) => String.fromCodePoint(c)).join('');
      if (decoded !== null && decoded !== original) {
        result += decoded;
        changed = true;
        runs.push({ from: original, to: decoded });
      } else {
        result += original;
      }
      i = j;
    } else {
      result += chars[i];
      i++;
    }
  }
  return { result, changed, runs };
}

function fixMojibake(text) {
  const pass1 = fixWithMap(text, WIN1252_MAP);
  const pass2 = fixWithMap(pass1.result, CP437_MAP);
  return {
    result: pass2.result,
    changed: pass1.changed || pass2.changed,
    runs: [...pass1.runs, ...pass2.runs],
  };
}

const files = walk(ROOT, []);
const affected = [];

for (const file of files) {
  const raw = fs.readFileSync(file, 'utf8');
  const { result, changed, runs } = fixMojibake(raw);
  if (changed) {
    affected.push({ file: path.relative(process.cwd(), file), runs });
    if (MODE === 'fix') fs.writeFileSync(file, result, 'utf8');
  }
}

if (affected.length === 0) {
  console.log('OK: no mojibake detected.');
  process.exit(0);
}

console.log(`${MODE === 'fix' ? 'Fixed' : 'FOUND'} mojibake in ${affected.length} file(s):\n`);
for (const { file, runs } of affected) {
  console.log(`- ${file} (${runs.length} occurrence(s))`);
}
process.exit(MODE === 'fix' ? 0 : 1);
