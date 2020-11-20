const fs = require('fs');
const order = require('./order');

const actions = {
    add: order.add,
};

const handler = (req, res, action, file) => {

    fs.readFile(file, 'utf-8', (err, data) => {
        if (err){
            res.sendStatus(404, JSON.parse({result: 0, text: err}));
        }else{
            const newOrder = actions[action](JSON.parse(data), req);
            fs.writeFile(file, newOrder, (err) => {
                if (err){
                    res.send('{"result": 0}');
                }else{
                    res.send('{"result": 1}');
                }
            })
        }
    });
};

module.exports = handler;