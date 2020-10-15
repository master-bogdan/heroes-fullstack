const http = require('http');
const path = require('path');
const fs = require('fs');
const { Characters } = require('./db/config_db');

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
    if (req.method === 'GET') {
        if (req.url === '/') {
            sendRes('index.html', 'text/html', res);
        }
        else if (req.url === '/api/data') {
            getData(req, res);
        }
        else {
            sendRes(req.url, getContentType(req.url), res);
        } 
    }
    else if (req.method === 'POST') {
        if (req.url === '/api/create') {
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });
            req.on('end', () => {
                const result = JSON.parse(body);
                Characters.create({
                    title: result.title,
                    description: result.description,
                    image: result.image
                })
                .then(res=>console.log(res))
                .catch(err=>console.log(err));
            });
        }
        else if (req.url === '/api/update') {
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });
            req.on('end', () => {
                const result = JSON.parse(body);
                console.log(result.values);
                Characters.update(
                    {
                        image: result.values.img,
                        title: result.values.title,
                        description: result.values.descr
                    },
                    {
                        where: {
                            id: result.id
                        }
                    }
                  )
                  .then(res=>console.log(res))
                  .catch(err=>console.log(err));
            });
        }
        else if (req.url === '/api/delete') {
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });
            req.on('end', () => {
                Characters.destroy({
                    where: {id: body}
                  })
                  .then(() => {
                        return body;
                    })
                  .catch((error) => {
                    console.log('error', error);
                  });
            });
        }
    }
    else {
        sendRes(req.url, getContentType(req.url), res);
    }

}).listen(3001, () => {
    console.log('Server running at http://localhost:3001/');
});

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

function getData(req, res) {
    let result = [];
        Characters.findAll()
        .catch(err => console.log(err))
        .then((data) => {
            data.map((item) => {
                result.push(item.dataValues);
            });
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(result));
        });
}

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