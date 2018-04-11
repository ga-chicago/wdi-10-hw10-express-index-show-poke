const express = require('express');
const app = express();

const PORT = 3000;
const pokemon = require('./models/pokemon.js')

app.listen(3000, () => {
	console.log('listening on port 3000');
})

app.get('/', (req, res) => {
	res.send("Welcome to the Pokemon App!");
})

app.get('/pokemon', (req, res) => {
	res.render('index.ejs', {
		pokemon: pokemon
	})
	// res.send(pokemon)
})

app.get('/pokemon/:id', (req, res) => {
	res.render('show.ejs', {
		id: req.params.id,
		pokemon: pokemon[req.params.id]
	})
})