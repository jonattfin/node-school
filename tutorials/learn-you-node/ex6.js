const getFilesInFolder = require('./ex6-module');

const folder = process.argv[2];
const extension = process.argv[3];

getFilesInFolder(folder, extension, (err, files) => {
  if (err) {
    console.log(err);
  }

  files.forEach(file => console.log(file));
});
