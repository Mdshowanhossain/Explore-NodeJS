const http = require('http');
const fs = require('fs');

const WriteFileServer = http.createServer((req, res) => {

    fs.writeFile('myText.txt', 'I am SOHAN', (error) => {

        if (error) {
            res.writeHead(400, { 'Content-Type': 'text/html' });
            res.write('WriteFile Failed');
            res.end();
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('WriteFile Success')
            res.end();
        }
    })
})

WriteFileServer.listen(5000);
console.log('Server is running')