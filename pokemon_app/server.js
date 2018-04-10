const express = require('express');
const app = express();

const pokemon = require('./models/pokemon.js')

app.use(express.static('public'))
app.get('/', (reg,res) => {
	res.send('Welcome to the Pokemon App!');
})

app.get('/pokemon', (req,res) => {
	res.render('index.ejs', {
		pokemonList: pokemon
	})
})

app.get('/pokemon/:id', (req, res) => {
	res.render('show.ejs', {
		pokemon: pokemon[req.params.id]
	})
})















const port = 3000
app.listen(port, (req,res) => {
	console.log('listening for port ' + port)
})