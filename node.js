const express = require('express')
const app = express()
const port = 3000




const fs = require("fs");

fs.readFile("./data.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log("File read failed:", err);
    return;
  }
  const k = JSON.parse(jsonString);
  console.log("File data:", `${k.user1.name}`);
});




app.get('/', (req, res) => {
  res.send(`${k.user1.name}`)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})