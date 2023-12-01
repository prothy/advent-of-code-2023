import { open } from 'fs/promises';
import * as readline from 'readline/promises';

export async function processLinesInFile(fileName, callback) {
  const file = await open(fileName);
  const rl = readline.createInterface({ input: file.createReadStream() });

  for await (const line of rl) {
    callback(line);
  }
}
