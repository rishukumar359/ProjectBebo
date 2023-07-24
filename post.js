const express = require('express')
const app = express()
const port = 3010
const fs = require("fs"); 
const cors = require('cors')

app.use(cors());

app.post('/adduser',(req,res)=>{ 
    fs.readFile('./data.json', "utf8", (err,data) => { 
        var users=JSON.parse(data) 
        
        let userid=req.params.id ;
        let su=req.params.sub;
        for (const i in users){  
            if(users[i].id==parseInt(userid)){ 
                users[i].sub=su   
            } 
            
        } 
        fs.writeFile('./data.json', JSON.stringify(users), (err) => {
            if (err){
            console.log(err);
            }
            else {
            console.log("File written successfully\n"); 
            }
        res.send(JSON.stringify(users))
        
        })
    //res.send(JSON.stringify(users)) 
     }); 
    
})  

app.listen(port,()=>{
     console.log(`${port}`)
})