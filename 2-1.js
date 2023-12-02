import { processLinesInFile } from './utils.js';

let total = 0;

const limits = {
  red: 12,
  green: 13,
  blue: 14,
};

function findCubeQuantities(line) {
  return line.match(/(\d+)\s(red|blue|green)/g).map((result) => {
    const kv = result.split(' ');

    return [Number(kv[0]), kv[1]];
  });
}

function findGameId(line) {
  return Number(line.match(/(?<=(Game\s))\d+/g));
}

function validateColors(line) {
  const cubeQuantities = findCubeQuantities(line);

  for (const [quantity, color] of cubeQuantities) {
    if (limits[color] < quantity) {
      return false;
    }
  }

  return true;
}

function calculateResult(line) {
  const isPossible = validateColors(line);

  if (isPossible) {
    total += findGameId(line);
  }
}

await processLinesInFile(calculateResult);

console.log(total);
