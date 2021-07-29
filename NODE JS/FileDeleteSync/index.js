const http = require('http');
const fs = require('fs');

const readFileServer = http.createServer((req, res) => {

    if (req.url === "/") {

        const error = fs.unlinkSync('index.html');

        if (error) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write('Your file deleted failed');
            res.end();
        } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write('Your file deleted');
            res.end();
        }
    }
})

readFileServer.listen(5000);

console.log('Your server is running');