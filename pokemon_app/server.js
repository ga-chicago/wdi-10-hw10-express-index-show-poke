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

app.get('/pokemon/:id', (req, res) => {
	res.render('show.ejs', {
		pokemon: pokemon[req.params.id]
	})
})


// add an h2 tag that will display the name of the pokemon
// add an image tag that will display an image of the pokemon
// add an anchor tag with the text of back, that will take you back to your index.ejs view
// update the route in the server.js to render the show view with the pokemon data
// 🔴 The commit message should read: 
// "Commit 9 - created show views of each pokemon "













const port = 3000
app.listen(port, (req,res) => {
	console.log('listening for port ' + port)
})