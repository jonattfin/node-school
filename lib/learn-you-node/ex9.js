const http = require('http');

printContents(process.argv[2], process.argv[3], process.argv[4]);

async function printContents(...urls) {
  const responses = await Promise.all(urls.map(url => getContents(url)));
  responses.forEach(r => console.log(r));
}

async function getContents(url) {
  return new Promise((resolve, reject) => {
    http.get(url, response => {
      response.setEncoding('utf8');

      let s = '';

      response.on('data', data => s += data);
      response.on('error', error => reject(error));

      response.on('end', () => {
        resolve(s);
      });
    }).on('error', () => reject());
  })
}
