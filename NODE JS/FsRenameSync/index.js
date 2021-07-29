const http = require('http');
const fs = require('fs');

const fileRenameSync = http.createServer((req, res) => {

    if (req.url === '/') {

        const error = fs.renameSync('myFile.txt', 'yourFile.txt');

        if (error) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.write('There was an error');
            res.end();
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('Your File rename Success');
            res.end();
        }
    }
})

fileRenameSync.listen(5000);
console.log('Server is running');