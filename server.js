const express=require('express')
const mongoose=require('mongoose') 
const Router=require("./routes") 
const bodyParser = require('body-parser');  
// const routes_user=require('./routes/user_routes')


const app= express() ;
app.use(express.json());  
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json()); 

// mongoose.connect('mongodb://127.0.0.1:27017/userdb' 

mongoose.connect("mongodb+srv://rikumar:lnl45QOkyvv3hT4k@cluster0.hpv9fog.mongodb.net/userdb?retrywrites=true&w=majority"
, { useNewUrlParser: true });
    
const db=mongoose.connection;
db.on("error",console.log.bind(console,"connection error"));
db.once("open",function (){
    console.log("connected sucess");
});


app.use(Router)

app.listen(3020,()=>{
    
    console.log("listen")
})