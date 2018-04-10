const express = require('express');
const app = express();

const pokemon = require('./models/pokemon.js')

app.get('/', (reg,res) => {
	res.send('Welcome to the Pokemon App!');
})

app.get('/pokemon', (req,res) => {
	res.render('index.ejs', {
		pokemonList: pokemon
	})
})




















const port = 3000
app.listen(port, (req,res) => {
	console.log('listening for port ' + port)
})