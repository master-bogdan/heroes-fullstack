const { Characters } = require('../db/config_db');

module.exports = function(req,res) {
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

