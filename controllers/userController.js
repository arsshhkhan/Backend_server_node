const userServices = require("../services/userServices")

class userController{
    static list(req,res){
   userServices.list(req,res);
    }
    static create(req,res){
        userServices.list(req,res);
    
        
    }
    static update(req,res){
        userServices.update(req,res);
        
    
    }
    static delete(req,res){
        userServices.delete(req,res);
        
    
    }
    static detail(req,res){
        userServices.detail(req,res);
    
    }
    
}
module.exports=userController