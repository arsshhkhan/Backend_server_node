const express = require('express');
const app = express();
app.set('view engine', 'ejs')

app.get('/',function(req,res){
    res.render('home')
})
app.get('/',function(req,res){
    res.status(200).json({message:"Home Page"})
})

app.get('/about',function(req,res){
    res.status(200).json({message:"About Page"})
})


app.listen(8080,function(){
    console.log("server started running on port 8080 ")
    
})