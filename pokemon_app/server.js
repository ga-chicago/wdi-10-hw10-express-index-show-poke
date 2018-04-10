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
	res.send(req.params.id)
})


// Set up your show route
// Inside your server.js, add a new get route /pokemon/:id
// That will res.send(req.params.id);
// So, when you go to localhost:3000/pokemon/whatever
// whatever will show up in the browser
// 🔴 The commit message should read: 
// "Commit 7 - show view shows req.params.id "















const port = 3000
app.listen(port, (req,res) => {
	console.log('listening for port ' + port)
})