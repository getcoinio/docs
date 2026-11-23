// Checks the install commands in content/docs against the real image, port, volume and script URL.
// Exits with 1 when a code block disagrees.
import { readFileSync, readdirSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const IMAGE = 'ghcr.io/getcoinio/coinio';
const PORT = '8080';
const VOLUME = 'coinio-data';
const SCRIPT = 'curl -fsSL https://getcoinio.me/install | sh';

const root = fileURLToPath(new URL('../content/docs', import.meta.url));
const files = (function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : e.name.endsWith('.mdx') ? [join(dir, e.name)] : [],
  );
})(root);

const errors = [];
for (const file of files) {
  const lines = readFileSync(file, 'utf8').split('\n');
  let inCode = false;
  lines.forEach((line, i) => {
    if (/^\s*```/.test(line)) {
      inCode = !inCode;
      return;
    }
    if (!inCode) return;
    const at = `${relative(process.cwd(), file)}:${i + 1}`;
    for (const m of line.matchAll(/ghcr\.io\/[\w.-]+\/[\w.-]+/g)) {
      if (m[0] !== IMAGE) errors.push(`${at}: image "${m[0]}", expected "${IMAGE}"`);
    }
    for (const m of line.matchAll(/-p\s+(?:[\d.]+:)?(\d+):(\d+)/g)) {
      if (m[2] !== PORT) errors.push(`${at}: container port ${m[2]}, expected ${PORT}`);
    }
    for (const m of line.matchAll(/-v\s+([\w.-]+):\/data\b/g)) {
      if (m[1] !== VOLUME) errors.push(`${at}: volume "${m[1]}", expected "${VOLUME}"`);
    }
    if (/getcoinio\.me\/install/.test(line) && /\|\s*(sh|bash)/.test(line) && line.trim() !== SCRIPT) {
      errors.push(`${at}: install line differs from "${SCRIPT}"`);
    }
  });
}

if (errors.length) {
  console.error(errors.join('\n'));
  console.error(`${errors.length} problem(s) in install commands`);
  process.exit(1);
}
console.log(`install commands ok (${files.length} files)`);
