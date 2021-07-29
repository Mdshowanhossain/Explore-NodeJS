const http = require('http');
const fs = require('fs');

const RenameServer = http.createServer((req, res) => {

    if (req.url === '/') {
        fs.rename('myText.txt', 'sohan.txt', (error) => {
            if (error) {
                res.writeHead(400, { 'Content-Type': 'text/html' })
                res.write('There was a error trying to rename');
                res.end();
            }
            else {
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.write('File rename Success');
                res.end();
            }
        })
    }
});
RenameServer.listen(5000);
console.log('Server is listening on')