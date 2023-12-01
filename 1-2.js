import { processLinesInFile } from './utils.js';

let total = 0;

const digitsSpelled = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];

// use lookahead to match strings such as 'oneight' => ['one', 'eight']
const regex = new RegExp(`(?=(${digitsSpelled.join('|')}|\\d))`, 'g');

function findDigits(line) {
  const matches = [...line.matchAll(regex)];
  return matches.map((el) => el[1]);
}

function convertDigitToInt(digit) {
  if (isNaN(Number(digit))) {
    return digitsSpelled.indexOf(digit) + 1;
  }

  return digit;
}

function iterateTotal(digits) {
  const number = parseInt(digits.join(''));

  total += number;
}

function extractNumbersFromLine(line) {
  const digitsInLine = findDigits(line);

  if (!digitsInLine) {
    return;
  }

  const digitPair = [digitsInLine.at(0), digitsInLine.at(-1)];
  const convertedPair = digitPair.map(convertDigitToInt);

  iterateTotal(convertedPair);
}

await processLinesInFile(extractNumbersFromLine);

console.log(total);
