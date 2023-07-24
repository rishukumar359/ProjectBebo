const express = require('express')
const app = express()
const port = 3010
const fs = require("fs"); 
const cors = require('cors') 


app.use(cors()); 



app.get('/getuser',(req,res)=>{ 
//       fs.readFile('./data.json', "utf8", (err,data) => { 
//         //data=JSON.parse(data)  
//         var users=JSON.parse(data) 
        
//    // console.log(req.params)   
//     //var user =users["user"+req.params] 
//     //console.log(user) 
    
//     res.send(JSON.stringify(users)) 
//      }); 


async function New(){
     try{
          const result=await Promise.allSettled([
               fetch("http://localhost:3020/users")
 .then((response) => {
   return response.json(); 
     
 }) ,
  fetch("https://api.github.com/users")
 .then((response) => {
   return response.json(); 
     
 })
          ]
          ); 
          console.log(result)

     } catch(error){

     }
} 



})  

app.listen(port,()=>{
     console.log(`${port}`)
})