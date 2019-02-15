const http = require('http');
const url = require('url');

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' });

  const props = url.parse(request.url, true);

  let result;
  const date = new Date(props.query.iso);
  if (request.url.includes('parsetime')) {
    result = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };
  } else {
    result = { unixtime: date.getTime() };
  }

  response.end(JSON.stringify(result));
});

server.listen(process.argv[2]);
