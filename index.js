const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRoute');

app.set('view engine', 'ejs')
require("dotenv").config();

app.use(bodyParser.urlencoded({ extended:false}))
app.use(bodyParser.json());

app.get('/',function(req,res){
    res.render('home')
})
app.use('/api/v1/user',userRouter)

app.listen(process.env.PORT,function(){
    console.log(`server started running on port ${process.env.PORT}! `)
    
})