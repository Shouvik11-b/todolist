const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  var today = new Date();
  if(today.getDate==6 || today.getDate==0){
    res.send("weekend");
  }
  else{
    res.send("not weekend");
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})