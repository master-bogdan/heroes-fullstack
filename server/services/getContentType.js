const path = require('path'); 
 
function getContentType(url) {
    switch(path.extname(url)) {
        case ".html":
            return "text/html";
        case ".css":
            return "text/css";
        case ".js":
            return "text/javascript";
        case ".json":
            return "application/json";
        default:
            return "application/octate-stream";
    }
 }

 module.exports = getContentType;