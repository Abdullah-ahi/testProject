const express = require('express');
const orderRouter = require('./orderRouter');
const app = express();

app.use(express.json());
app.use('/', express.static('./public'));
app.use('/api/order', orderRouter);


const port = process.env.PORT || 3000;
app.listen(port, ()=> {
    console.log(`Listening ${port} port`);
});