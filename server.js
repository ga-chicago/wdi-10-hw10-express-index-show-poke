const express = require('express');
const app = express();

const port = 3000;

const pokemon = require('./models/pokemon.js');

app.get('/welcome', (req, res) => {
	res.send("Welcome to the Pokemon App!")
});

app.get('/pokemon', (req, res) => {
	res.render('index.ejs', {
		pokemon: pokemon
	})
});

app.listen(3000, () => {
	console.log("Server listening on port 3000");
});