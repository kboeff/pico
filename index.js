let start = new Date();

const permutate = require('./permutations/permutations');
const combine = require('./permutations/combinations');

const fs = require('fs');


let sample = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', '1', '2', '3', '4'];
// let sample = ['a', 'b', 'c'];
let size = 6;

let combinations = combine(sample, size);

/*
let result = [];
for (let i in combinations) {
  // console.log(permutate(combinations[i]).join('\n'));
  result.push(permutate(combinations[i],size).join('\n'));
}
*/

let logger = fs.createWriteStream('./file.txt', {
  flags: 'a' // 'a' means appending 
});

for (let i in combinations) {
  logger.write(permutate(combinations[i]).join('\n'));
  logger.write('\n');
}
logger.end();
 
console.log('Done in ', start - new Date());
