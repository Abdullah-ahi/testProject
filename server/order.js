const add = (order, req) => {
    order.contents.push(req.body);
    return JSON.stringify(order, null, 4)
};

module.exports = {
    add,
}