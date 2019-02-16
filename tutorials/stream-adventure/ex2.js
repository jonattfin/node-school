const fs = require('fs');

const stream = fs.createReadStream(process.argv[2]);
stream.pipe(process.stdout);
