var http = require('http');
var fs = require('fs');
const express = require('express');
const app = express();

const PORT=8080;

fs.readFile('./cesium.html', function (err, html) {
    if (err) throw err;

    http.createServer(function(request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    }).listen(PORT);
});


console.log(`Example app listening at http://localhost:${PORT}`);
