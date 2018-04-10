const express = require('express');
const app = express();

const pokemon = require('./models/pokemon.js')

const PORT = 3000;

app.get('/', (req, res) => {
  res.send("Welcome to the Pokemon App!")
});

app.get('/pokemon', (req, res) => {
  res.send(pokemon);
});


// app.get('/superheroes', (req, res) => {
//   res.send(superheroes);
// });















// LISTENER
app.listen(PORT, function() {
  console.log('PokeExpress running on port: ' + PORT);
})
