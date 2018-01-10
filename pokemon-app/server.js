const express = require('express');
const app = express();
let port = 3000;

app.get('/', (req, res)=>{
  res.send('Welcome to the pokemon app!')
})


app.listen(port, ()=>{
  console.log("server is listening on port " + port);
});