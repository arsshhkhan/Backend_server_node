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
        try{
            const data = (({name,email,password})=>({name,email,password}))(req.body);
            User.insertMany([data]);
            res.status(200).json({message:"User created Successfully"})
        }
        catch(err){
            res.status(400).json({message:err})
        }
    }
    async update(req,res){
        
    }

    async delete(req,res){
        const id =req.params.id;
        await User.findByIdAndDelete(id);
        res.status(200).json({message:"User deleted"})
    }
    catch(err){
        res.status(400).json({message:err})
    }
    
    async detail(req,res){
        const id =req.params.id;
        const user =await User.findById(id);
        res.status(200).json({message:"Successfully",data:user})
    }
    catch(err){
        res.status(400).json({message:err})
    }

}

module.exports=new userService