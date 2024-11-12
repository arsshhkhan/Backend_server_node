const jwt =require('jsonwebtoken');
const User = require('../models/User');
const userServices = require('../services/userServices');
require("dotenv").config();

const key = process.env.KEY;
let blacklist=[];
class Authentication{

    verifyToken(req,res,next){
        const authHeader = req.headers['authorization'];
        if (!authHeader) return res.status(403).json({message:"No Token Provideed"});

        const token = authHeader.split(' ')[1];
        if(!token) return res.status(403).json({message:"No token provided"});

        if(blacklist.includes(token)){
            return res.status(401).json({ message: 'Token revoked.please login again'})
        }

        jwt.verify(token,key, (err,decoded)=>{
            if (err){
                return res.status(401).json({message:'Failed to authentication token'});
            }
            req.user = decoded;
            next();
        })
    }

async login(req,res){
    try{
        const credentials =(({email,password})=>({email,password}))(req.body);
        const user = await User.findOne(credentials);
        if(!user){
            res.status(400).json({message:"Usernot found!"})
        }
        const token =jwt.sign({ email: user.email, name: user.name, id: user.id}, key,{expiresIn: '1h'});
        res.status(200).json({token});
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
}

async register(req,res){
    userServices.create(req,res);
}

logout(req,res){
    const authHeader = req.headers['authorization'];
    if(!authHeader) return res.status(403)({message:'No token provided.'});

    const token =authHeader.split(' ')[1];
    if(!token) return res.status(403).json({message: 'No token provided'});

    blacklist.push(token);
    res.status(200).json({message: 'Logout successfully'});
}



}
module.exports = new Authentication;