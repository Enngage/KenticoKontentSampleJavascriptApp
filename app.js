var httpServer = require('http-server');
var opn = require('opn');

var hostname = 'localhost';
const port = 99;

httpServer.createServer().server.listen(port, hostname);

var url = `http://${hostname}:${port}`;

console.log(`Listening on: ${url}`);

opn(url);

