const http = require('http');

const firstServer = http.createServer((req, res) => {
    res.end("Hello World");
});

firstServer.listen(5000);
console.log('Your server listening')