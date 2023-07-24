const express = require('express')
const app = express()
const port = 3020
const fs = require("fs"); 
const cors = require('cors')

app.use(cors());
//var id=2;
app.delete('/del/:id',(req,res)=>{ 
     var id = req.params.id ;
      fs.readFile('./data.json', "utf8", (err,data) => { 
        data=JSON.parse(data)  
        //var users=JSON.parse(data) 
        delete data["user"]  
       console.log(JSON.stringify(data))   
    
       res.status(200);

    return res.send("deleted");
    //console.log(data)
    //res.send(JSON.stringify(data))  


//     fs.writeFile('./data.json', JSON.stringify(data), (err) => {
//      if (err)
//        console.log(err);
//      else {
//        console.log("File written successfully\n");
      
//      }
//  }) 
     });

})  

app.listen(port,()=>{
     console.log(`${port}`)
})