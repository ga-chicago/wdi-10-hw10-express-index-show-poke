const express = require('express');
const app = express();

const pokemon = require('./models/pokemon.js')

const PORT = 3000;

app.get('/', (req, res) => {
  res.send("Welcome to the Pokemon App!")
});

app.get('/pokemon', (req, res) => {
  res.render('index.ejs', {
    pokemon: pokemon
  })
});



//SHOW route
app.get('/pokemon/:id', (req, res) => {
  res.render('show.ejs', {
    pokemon: pokemon[req.params.id]
  })
  thePokemon = {
    name: req.body.name

  }
});












// LISTENER
app.listen(PORT, function() {
  console.log('PokeExpress running on port: ' + PORT);
})
