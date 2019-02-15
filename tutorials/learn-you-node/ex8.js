const http = require('http');

http.get(process.argv[2], response => {
  response.setEncoding('utf8');

  let s = '';

  response.on('data', data => s += data);
  response.on('error', console.error);

  response.on('end', () => {
    console.log(s.length);
    console.log(s);
  });
}).on('error', console.error);
