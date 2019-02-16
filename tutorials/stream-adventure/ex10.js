const trumpet = require('trumpet');
const through2 = require('through2');

const t = trumpet();

process.stdin.pipe(t);
t.select('.loud').createStream()
  .pipe(through2(write, end))
  .pipe(process.stdout);

function write(buffer, _, next) {
  this.push(buffer.toString().toUpperCase());
  next();
}

function end(done) {
  done();
}
