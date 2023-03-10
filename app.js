const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const port = 3000

app.set("view engine","ejs")
app.use(bodyParser.urlencoded({extended: true}))
var items = []
app.get('/', (req, res) => {
  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }

  day = today.toLocaleDateString("en-US",options)

  
  res.render('list',{kindOfDay: day,nameList: items})

  
})

app.post("/",(req,res) => {
  var box = req.body.newItem
  items.push(box)
  res.redirect("/")
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})