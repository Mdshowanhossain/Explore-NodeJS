const http = require('http');

const fs = require('fs');

const readFileServer = http.createServer((req, res) => {


    if (req.url === "/") {

        fs.readFile('index.html', (error, data) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            res.end();
        })
    }
})

readFileServer.listen(5000);

console.log('Your server is running');