import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const root = path.resolve(import.meta.dirname, '..');
const target = path.join(root, 'workspace/input_manifest.json');
if (fs.existsSync(target)) throw new Error('Input manifest already exists; it is not overwritten.');
const files = {};
function capture(relative) {
  const absolute = path.join(root, relative);
  if (fs.statSync(absolute).isDirectory()) {
    for (const name of fs.readdirSync(absolute).sort()) capture(`${relative}/${name}`);
  } else {
    const text = fs.readFileSync(absolute, 'utf8').replace(/\r\n/g, '\n');
    files[relative] = crypto.createHash('sha256').update(text).digest('hex');
  }
}
for (const relative of ['TUTORIAL.md', 'starter', 'solutions']) capture(relative);
fs.writeFileSync(target, JSON.stringify({
  purpose: 'Preserve supplied course materials during submission packaging',
  normalisation: 'UTF-8 text with CRLF normalised to LF', files,
}, null, 2) + '\n');
console.log(`Captured ${Object.keys(files).length} supplied files.`);
