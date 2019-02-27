const permutate = require('./permutations/permutations');
const combine = require('./permutations/combinations');

const fs = require('fs');


let sample = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', '1', '2', '3'];
// let sample = ['a', 'b', 'c', 'd', '2', 's'];
let size = 6;

let combinations = combine(sample, size);
// console.log(combinations);
// console.log(permutate(sample).length);


let logger = fs.createWriteStream('./file.txt', {
  flags: 'a' // 'a' means appending 
});

for (let i in combinations) {
  // console.log(permutate(combinations[i]).join('\n'));
  logger.write(permutate(combinations[i]).join('\n'));
  logger.write('\n');
}
logger.end();