const http = require('http');
const sendRes = require('./services/sendRes');
const getContentType = require('./services/getContentType');
const get = require('./routes/get');
const post = require('./routes/post');

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
    if (req.method === 'GET') {
        get(req, res);
    }
    else if (req.method === 'POST') {
        post(req, res);
    }
    else {
        sendRes(req.url, getContentType(req.url), res);
    }

}).listen(3001, () => {
    console.log('Server running at http://localhost:3001/');
});
