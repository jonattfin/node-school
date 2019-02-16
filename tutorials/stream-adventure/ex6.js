const concat = require('concat-stream');

process.stdin
  .pipe(concat(callback))

function callback(body) {
  return body.toString().split('').reverse().join('');
}

