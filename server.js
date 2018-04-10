const express = require('express')
const app = express();

const Port = 3000;

app.get('/', (req, res) => {
	res.send('Welcome to the Pokemon App!');
})

const pokemon = require('./models/pokemon.js')




app.get('/pokemon', (req, res) => {
	
	res.render('index.ejs', {
		pokemon: pokemon

	});
})


























app.listen(3000, () => {
	console.log("Server is listening on Port 3000")
})