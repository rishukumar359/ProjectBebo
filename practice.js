const express = require('express')
const app = express()
const port = 3000
const fs = require("fs");

// const data= { "user5":{
//     "id":5,
//     "name":"roshan",
//     "roll":1963

//     }
// }


app.get('/',function(req,res){ 
   const data=fs.readFile('./data.json', "utf8", (err, ab) => { 
        const k=JSON.parse(ab) 

        console.log(k)  
        res.send(`${k.user1.name} +${k.user1.roll}`)
}) 
}) 
app.listen(port,()=>{

})
//var server=app.listen(8081,function(){
