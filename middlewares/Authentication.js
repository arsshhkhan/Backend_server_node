const jwt =require('jsonwebtoken')
require("dotenv").config();

const key = process.env.key.KEY;
class Authentication{

    verifyToken(req,res,next){
        const authHeader = req.headers['authorization'];
        if (!authHeader) return res.status(403).json({message:"No Token Provideed"});

        const token = authHeader.split('')[1];
        if(!token) return res.status(403).json({message:"No token provided"});

        jwt.verify(token.key, (err,decoded)=>{
            if (err){
                return res.status(401).json({message:'Failed to authentication token'});
            }
            req.user = decoded;
            next();
        })
    }
}
module.exports = new Authentication;