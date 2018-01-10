const express = require('express');
const app = express();
let port = 3000;
const pokemon = require('./models/pokemon.js')

app.get('/', (req, res)=>{
  res.send('Welcome to the pokemon app!')
});

app.get('/pokemon', (req,res)=>{
  res.render('index.ejs', {pokemon: pokemon});
});

app.get("/pokemon/:id", (req, res)=>{
  console.log('pokemon id route being hit')
  res.render('show.ejs', {pokemon: pokemon[req.params.id]});
});



app.listen(port, ()=>{
  console.log("server is listening on port " + port);
});