const http = require('http');

const URL = require('url');


const UrlServer = http.createServer((req, res) => {

    const myUrl = ('https://github.com/Mdshowanhossain?tab=repositories');

    const parseMyUrlObj = URL.parse(myUrl, true);

    const host = parseMyUrlObj.host;
    const path = parseMyUrlObj.path;
    const search = parseMyUrlObj.search


    // res.writeHead(200, { 'Content-Type': 'Text/html' });
    // res.write(host);
    // res.end();

    // res.writeHead(200, { 'Content-Type': 'Text/html' });
    // res.write(path);
    // res.end();

    res.writeHead(200, { 'Content-Type': 'Text/html' });
    res.write(search);
    res.end();
})

UrlServer.listen(5000);
console.log('Your Server is Running');