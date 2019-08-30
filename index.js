const express = require('express');
const app = express();
const { db, users, products, carts, orders, wishlist } = require('./database/database')
const userroute = require('./routes/user');
const vendorroute=require('./routes/vendor');
const adminroute=require('./routes/admin');

app.use(express.json())
app.use(express.urlencoded(({ extended: true })))
app.use('/user', userroute)
app.use('/vendor',vendorroute)
app.use('/admin',adminroute);
app.get('/', function (req, res) {
    res.send('hello');
})

app.listen(4000, () => {
    console.log("http://localhost:4000");
})