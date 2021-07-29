const http = require('http');
const fs = require('fs');

const RenameServer = http.createServer((req, res) => {

    if (req.url === '/') {

        fs.exists("myText.txt", (error) => {
            if (error) {
                res.writeHead(400, { 'Content-Type': 'text/html' })
                res.write('NO File');
                res.end();
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.write('File');
                res.end();
            }
        })
    }
});
RenameServer.listen(5000);
console.log('Server is listening on')