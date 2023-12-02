import { processLinesInFile } from './utils.js';

let total = 0;

function findCubeQuantities(line) {
  return line.match(/(\d+)\s(red|blue|green)/g).map((result) => {
    const kv = result.split(' ');

    return [Number(kv[0]), kv[1]];
  });
}

function getMinima(cubeQuantities) {
  const minima = {
    red: 0,
    green: 0,
    blue: 0,
  };

  for (const [quantity, color] of cubeQuantities) {
    if (minima[color] < quantity) {
      minima[color] = quantity;
    }
  }

  return [...Object.values(minima)];
}

function calculateResult(line) {
  const cubeQuantities = findCubeQuantities(line);
  const minima = getMinima(cubeQuantities);

  total += minima.reduce((a, b) => a * b);
}

await processLinesInFile(calculateResult);

console.log(total);
