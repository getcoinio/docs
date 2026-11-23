// Checks every internal link and heading anchor in content/docs. Exits with 1 on a broken one.
import path from 'node:path';
import { getTableOfContents } from 'fumadocs-core/content/toc';
import { getSlugs } from 'fumadocs-core/source';
import { printErrors, readFiles, scanURLs, validateFiles } from 'next-validate-link';

const root = 'content/docs';
const files = await readFiles(`${root}/**/*.{md,mdx}`);

const scanned = await scanURLs({
  preset: 'next',
  populate: {
    'docs/[[...slug]]': files.map((file) => ({
      value: getSlugs(path.relative(root, file.path)),
      hashes: getTableOfContents(file.content).map((item) => item.url.slice(1)),
    })),
  },
});

printErrors(
  await validateFiles(files, {
    scanned,
    markdown: { components: { Card: { attributes: ['href'] } } },
    checkRelativeUrls: false,
  }),
  true,
);
