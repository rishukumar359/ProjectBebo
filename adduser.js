const express = require('express')
const app = express()
const port = 3000
const fs = require("fs"); 
const cors = require('cors')


// app.use(bodyParser.urlencoded({
//     extended:true
///}));
app.use(cors());
var user= { 
    "user5":{
    "id":5,
    "name":"roshan",
    "roll":1963

    }
}



app.post('/adduser',(req,res)=>{ 
    console.log('fsread')
      fs.readFile('./data.json', "utf8", (err,data) => { 
        data=JSON.parse(data) 
    
        console.log(data)
        data["user5"]= user;
        data["user5"]= user["user5"];
        console.log(data)  
        res.end(JSON.stringify(data)) 

        // res.send(`${k.user1.name}`)

     

}) 
}) 
// app.get('/adduser',function(req,res){ 
//     const data=fs.readFile('./data.json', "utf8", (err, ab) => { 
//          const k=JSON.parse(ab) 
 
//          console.log(k)  
//          res.send(`${k.user1.name} +${k.user1.roll}`)
 
      
 
//  }) 
//  }) 
app.listen(port,()=>{
     console.log(`${port}`)
})