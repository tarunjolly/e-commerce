const express = require('express');
const app = express();
const { db, users, products, carts, orders, wishlist } = require('./database/database')
const userroute = require('./routes/user');
const vendorroute=require('./routes/vendor');

app.set('view engine','hbs');
app.use(express.json())
app.use(express.urlencoded(({ extended: true })))
app.use(express.static('/public'))
app.use('/',express.static(__dirname+'/public'))


app.get('/',function(req,res){
    res.send('hello');
})

app.use('/user', userroute);
app.use('/vendor',vendorroute);


app.get('/logout',(req,res)=>{
    res.redirect('/')
})



app.listen(4000, () => {
    console.log("http://localhost:4000");
})