const express=require('express');
const app=express();
const {db,users,products,carts,orders,wishlist}=require('./database/database')
const userroute=require('./routes/user');

app.use('/user',userroute)

app.get('/',function(req,res){
    res.send('hello');
})

app.listen(4000,()=>{
    console.log("http://localhost:4000");
})