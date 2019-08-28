const express=require('express');
const route=express.Router();
const {db,users,products,carts,orders,wishlist}=require('../database/database');

//get all products from database
route.get('/getallproducts',(req,res)=>{
    products.findAll().then(allproducts=>{
        res.send(allproducts)
    })
})

//add a product to database
route.get('/addaproduct',(req,res)=>{
    products.create({
        id:req.body.id,
        name:req.body.name,
        type:req.body.type,
        subtype:req.body.subtype,
        price:req.body.price,
        manufacturer:req.body.manufacturer,
        image:req.body.image,
        stock:req.body.stock,
        vendor:req.body.vendor,
    })
})

//get all products from cart table 

module.exports=route
