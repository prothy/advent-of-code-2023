import { open } from 'fs/promises';
import * as readline from 'readline/promises';

export async function processLinesInFile(handler) {
  const file = await open('input.txt');
  const rl = readline.createInterface({ input: file.createReadStream() });

  rl.on('line', handler);

  return new Promise((resolve) => {
    rl.on('close', resolve);
  });
}
