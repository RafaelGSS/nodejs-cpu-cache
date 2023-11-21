const assert = require('assert')

const width = 1e4;
const height = 1e4;

let valueToAvoidDeadCode;

const image = [];

for(let x = 0; x < width; ++x) {
  image[x] = []
  for(let y = 0; y < height; ++y) {
    image[x][y] = 0
  }
}

for(let y = 0; y < height; ++y) {
  for(let x = 0; x < width; ++x) {
    valueToAvoidDeadCode = image[y][x];
  }
}

assert.ok(valueToAvoidDeadCode === 0)
