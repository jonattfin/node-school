const fs = require('fs');
const path = require('path');

function getFilesInFolder(folder, extension, callback) {
  fs.readdir(folder, (err, data) => {
    if (err) {
      return callback(err);
    }

    callback(null, data.filter(file => path.extname(file) === `.${extension}`));
  })
}

module.exports = getFilesInFolder;
