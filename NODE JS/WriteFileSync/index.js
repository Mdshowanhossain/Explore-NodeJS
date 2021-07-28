const http = require('http');
const fs = require('fs');

const writeFileSync = http.createServer((req, res) => {

    const error = fs.writeFileSync("myText.txt", "HEllO WORLD")

    if (error) {
        req.writeHead(400, { "Content-Type": "text/html" });
        res.write("Write File Success");
        res.end();
    }
    else {
        req.writeHead(200, { "Content-Type": "text/html" });
        res.write("Write File Failed");
        res.end();
    }
})

writeFileSync.listen(5000);
console.log('Server is running');