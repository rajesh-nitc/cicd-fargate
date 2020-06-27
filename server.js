const express = require('express')
const app = express()
 
app.get('/', function (req, res, next) {
  res.send("hello world2")
})

app.get('/health', (req, res, next) => {
  res.sendStatus(200);
});
 
app.listen(3000, "0.0.0.0")
console.log("server is up and running")