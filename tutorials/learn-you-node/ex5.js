const fs = require('fs');
const path = require('path');

const folder = process.argv[2];
const extension = process.argv[3];

printFilesInFolder(folder, extension);

function printFilesInFolder(folder, extension) {
  fs.readdir(folder, (err, data) => {
    if (err) {
      console.err(err);
    }

    const array = data.filter(file => path.extname(file) === `.${extension}`)
    array.forEach(item => console.log(item));
  })
}
