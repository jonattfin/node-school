const fs = require('fs');

const fileName = process.argv[2];
printNumberOfLines(fileName);

function printNumberOfLines(fileName) {
  fs.readFile(fileName, (err, buffer) => {
    if (err) {
      throw err;
    }

    const array = buffer.toString().split('\n');
    const number = array.length > 0 ? array.length - 1 : 0;
    console.log(number);
  });
}
