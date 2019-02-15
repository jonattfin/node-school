const fs = require('fs');

const fileName = process.argv[2];
console.log(getNumberOfLines(fileName));

function getNumberOfLines(fileName) {
  const buffer = fs.readFileSync(fileName);
  const array = buffer.toString().split('\n');
  return array.length > 0 ? array.length - 1 : 0;
}
