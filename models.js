const mongoose=require('mongoose') 

const UserSchema= new mongoose.Schema({
     name:{
        type:String,
        required:true} ,
        age:{
            type:Number,
            default:0 } ,
        email:{
            type:String
         },
         Password:{
            type:String
         }
        
    });

    const users=mongoose.model("users",UserSchema) 

    module.exports=users