const through2 = require('through2');

process.stdin.pipe(through2(write, end))
  .pipe(process.stdout);

let i = 0;

function write(buffer, encoding, next) {
  let s = buffer.toString();
  this.push(i % 2 === 0 ? s.toLowerCase() : s.toUpperCase());
  i++;
  next();
}

function end(done) {
  done();
}
