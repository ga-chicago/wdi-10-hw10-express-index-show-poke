const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const PORT = 3000;

const pokemon = require('./models/pokemon.js')

app.get('/', (req, res) => {
	res.send("Welcome to the Pokemon App!");
});

// **index route**
app.get('/pokemon', (req, res) => {
	res.send(pokemon);
	// res.render('index.ejs', {
	// 	thePokemon: pokemon
	// });
});

app.listen(PORT, () => {
	console.log("server listening on port 3000");
});