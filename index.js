const express = require('express');
const app = express();
app.set('view engine', 'ejs')
require("dotenv").config();

app.get('/',function(req,res){
    res.render('home')
})
app.get('/',function(req,res){
    res.status(200).json({message:"Home Page"})
})

app.get('/about',function(req,res){
    res.status(200).json({message:"About Page"})
})
app.post('/user/store',function(req,res){
    res.status(200).json({message:"Data Submitted"} )
})

app.listen(process.env.PORT,function(){
    console.log(`server started running on port ${process.env.PORT}! `)
    
})