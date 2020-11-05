const { Characters } = require('../db/config_db');

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

module.exports = getData;