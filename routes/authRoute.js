const express =require('express');
const Authentication =require('../middlewares/Authentication');
const userReq = require('../requests/userReq');

const authRouter =express.Router();

authRouter.post('/login',Authentication.login)
authRouter.post('/register',userReq.validationRules(),userReq.validate,Authentication.register)
authRouter.post('/logout',Authentication.logout)
module.exports=authRouter;