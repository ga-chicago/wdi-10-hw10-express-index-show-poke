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
		
	})
	// res.send(pokemon)
})