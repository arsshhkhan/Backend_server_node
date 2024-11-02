const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRoute');
const dbconnect = require('./config/dbconnect');

app.set('view engine', 'ejs')
require("dotenv").config();
dbconnect()



app.use(bodyParser.urlencoded({ extended:false}))
app.use(bodyParser.json());
app.get('/',function(req,res){
    res.render('home')
})

app.use('/api/v1/user',Authentication.verifyToken,userRouter)


app.listen(process.env.PORT,function(){
    console.log(`server started running on port ${process.env.PORT}! `)
    
})