const http = require('http');
const fs = require('fs');

const syncFileServer = http.createServer((req, res) => {

    const readFileSync = fs.readFileSync('index.html');

    res.writeHead(200, "Content-Type", "text/html");
    res.write(readFileSync);
    res.end();

})

syncFileServer.listen(5000);
console.log('Server is running now')