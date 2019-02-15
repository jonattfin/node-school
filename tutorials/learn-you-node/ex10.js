const net = require('net');

const server = net.createServer((socket) => {
  socket.end(formatDate());
});

function formatDate(date = new Date()) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate().toString();

  const hour = date.getHours();
  const minute = date.getMinutes();

  return `${year}-${addSuffix(month)}-${addSuffix(day)} ${addSuffix(hour)}:${addSuffix(minute)}`;
}

function addSuffix(x, number = 1) {
  if (Number(x) > 10)
    return x;

  return `${'0'.repeat(number)}${x}`;
}

server.listen(process.argv[2]);
