const path = require('path');
const fs = require('fs');

function sendRes(url, contentType, res) {
    let file = path.join(__dirname, '../build', url);
    fs.readFile(file, (err, content) => {
       if (err) {
           res.writeHead(404);
           res.write('file not found');
           res.end();
           console.log(`error 404 ${file}`);
       }
       else {
           res.writeHead(200, {'Content-Type': contentType});
           res.write(content);
           res.end();
           console.log(`res 200 ${file}`);
       }
    });
}

module.exports = sendRes;