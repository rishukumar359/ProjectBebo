const mongoose=require('mongoose') 

const UserSchema= new mongoose.Schema({ 

    token:{
        type:String,
        required:true
    }
        
    });

    const usertoken=mongoose.model("usertoken",UserSchema) 

    module.exports=usertoken