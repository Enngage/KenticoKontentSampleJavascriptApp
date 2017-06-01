var httpServer = require('http-server');

var hostname = 'localhost';
const port = 99;


httpServer.createServer({
}).server.listen(port, hostname);

console.log(`Listening on '${hostname}:${port}'`);

