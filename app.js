const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const port = 3000

app.set("view engine","ejs")

app.get('/', (req, res) => {
  var today = new Date();
  var day = ""
  if(today.getDay()==6){
    day = "saturday"
  }
  else if(today.getDay()==0){
    day = "sunday"
  }
  else if(today.getDay()==1){
    day = "monday"
  }
  else if(today.getDay()==2){
    day = "tuesday"
  }
  else if(today.getDay()==3){
    day = "wednesday"
  }
  else if(today.getDay()==4){
    day = "thursday"
    
  }
  else if(today.getDay()==5){
    day = "friday"
  }
  res.render('list',{kindOfDay: day})

  
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})