class userController{
    static list(req,res){
        res.status(200).json({message:"user list"})
    }
    static create(req,res){
    
        res.status(200).json({message:"user create"})
    }
    static update(req,res){
        
        res.status(200).json({message:"user Update"})
    }
    static delete(req,res){
        
        res.status(200).json({message:"user delete"})
    }
    static detail(req,res){
        res.status(200).json({message:"user detail"})
    
    }
    
}
module.exports=userController