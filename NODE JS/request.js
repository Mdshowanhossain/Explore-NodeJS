const http = require('http');
const { url } = require('inspector');


const myServer = http.createServer((req, res) => {
    if (req.url === ('/')) {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write("<h1>This is HOME</h1>")
        res.end();
    } else if (req.url === ('/about')) {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write("<h1>This is About Page</h1>");
        res.end();
    }
    else if (req.url === ('/contact')) {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write("<h1>This is Contact Page</<h1>")
    }
})

myServer.listen(5000);
console.log('Your server is running')