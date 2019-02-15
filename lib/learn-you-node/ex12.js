const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
  if (request.method !== 'POST') {
    return response.end('Send me POST requests');
  }

  request.on('data', chunk => response.write(chunk.toString().toUpperCase()));
  request.on('end', () => response.end());
});

server.listen(process.argv[2]);
