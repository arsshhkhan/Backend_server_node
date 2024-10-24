const User = require("../models/User");

class userService{
    async list(req,res){
    try{
        const user =await User.find({});
        res.status(200).json({message:"success",data:user})
    }
    catch(err){
        res.status(400).json({message:err})
    }
    }
    async create(req,res){
        
    }
    async update(req,res){
        
    }
    async delete(req,res){
        
    }
    async detail(req,res){
        
    }

}

module.exports=new userService