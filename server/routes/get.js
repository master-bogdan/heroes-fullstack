const sendRes = require('../services/sendRes');
const getData = require('../services/getData');
const getContentType = require('../services/getContentType');


module.exports = function(req, res) {
    if (req.method === 'GET') {
        switch(req.url) {
            case '/':
                return sendRes('index.html', 'text/html', res);
            case '/api/data':
                return getData(req, res);
            default:
                sendRes(req.url, getContentType(req.url), res);
        }
    } 
}