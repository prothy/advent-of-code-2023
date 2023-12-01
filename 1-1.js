import { processLinesInFile } from './utils.js';

let total = 0;

function extractNumbersFromLine(line) {
  const numbersInLine = line.match(/\d/g);
  const numberPair = [numbersInLine.at(0), numbersInLine.at(-1)].join('');

  total += parseInt(numberPair);
}

await processLinesInFile('1-1.txt', extractNumbersFromLine);

console.log(total);
