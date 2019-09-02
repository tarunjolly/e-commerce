const express = require('express');
const route = express.Router();
const { db, users, products, carts, orders, wishlist } = require('../database/database');

//add a product to database
route.post('/addaproduct', (req, res) => {
    products.create({
        id: req.body.id,
        name: req.body.name,
        type: req.body.type,
        subtype: req.body.subtype,
        price: req.body.price,
        manufacturer: req.body.manufacturer,
        image: req.body.image,
        stock: req.body.stock,
        vendor: req.body.vendor,
    }).then(allproducts=>{
        res.send(allproducts)
    })
})

//update the stock of a product
route.post('/updatestock',(req,res)=>{
    products.update({stock:req.body.stock},{where:{name:req.body.productname}}).then(()=>{
        res.sendStatus(200);
    })
})

//order list to the admin
route.get('/orderlist',(req,res)=>{
    orders.findAll().then((allorders)=>{
        res.send(allorders);
    })
})

//change the status of an order from pending to delivered or shipping
route.post('/orderlist',(req,res)=>{
    orders.update({status:req.body.status},{where:{productname:req.body.productname}}).then(()=>{
        res.sendStatus(200);
    })
})
















//homepage for the admin
route.get('/',(req,res)=>{
    res.render('adminhome')
})

//add a product page
route.get('/productpage',(req,res)=>{
    res.render('adminproductpage')
})

//updatestock page
route.get('/updatestockpage',(req,res)=>{
    res.render('adminstockpage')
})

//product details
route.get('/productdetailspage',(req,res)=>{
    res.render('adminproductdetails')
})

route.get('/orderspage',(req,res)=>{
    res.render('adminorders')
})

route.get('/logout',(req,res)=>{
    res.redirect('/')
})

module.exports=route