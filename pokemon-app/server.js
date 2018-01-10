const express = require('express');
const app = express();
let port = 3000;
const pokemon = require('./models/pokemon.js')

app.get('/', (req, res)=>{
  res.send('Welcome to the pokemon app!')
});

app.get('/pokemon', (req,res)=>{
  res.send(pokemon);
});


app.listen(port, ()=>{
  console.log("server is listening on port " + port);
});