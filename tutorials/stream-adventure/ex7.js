const http = require('http');
const through2 = require('through2');

const server = http.createServer((request, response) => {
  if (request.method !== 'POST') {
    return response.end('Send me POST requests');
  }

  request.pipe(through2(write, end))
    .pipe(response);
});

server.listen(process.argv[2]);

function write(buffer, _, next) {
  this.push(buffer.toString().toUpperCase());
  next();
}

function end(done) {
  done();
}
