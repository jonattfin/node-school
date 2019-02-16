const through2 = require('through2');

process.stdin.pipe(through2(write, end))
  .pipe(process.stdout);

function write(buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase());
  next();
}

function end(done) {
  done();
}
