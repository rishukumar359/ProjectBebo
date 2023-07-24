const express = require('express')
const app = express()
const port = 3010
const fs = require("fs"); 
const cors = require('cors')

app.use(cors());

app.put('/putuser/:id/:name/',(req,res)=>{ 
    fs.readFile('./data.json', "utf8", (err,data) => { 
        var users=JSON.parse(data) 
        console.log(req.params)   
        console.log(users) 
        users["user"+req.params.id].name=  req.params.name 

        fs.writeFile('./data.json', JSON.stringify(users), (err) => {
            if (err)
                console.log(err);
            else {
                console.log("File written successfully\n");
         
        }
    }) 
    res.send(JSON.stringify(users)) 
     }); 
})  


app.listen(port,()=>{
     console.log(`${port}`)
})