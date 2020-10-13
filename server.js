const express = require('express')
const app = express();

const Port = 3000;



app.get('/', (req, res) => {
	res.send('Welcome to the Pokemon App!');
})


const pokemon = require('./models/pokemon.js')
//Middleware
app.use((req, res, next) => {
	// console.log("I am middleware and will run for the routes")
	next();
})
app.use(express.static('public'))

app.get('/pokemon', (req, res) => {
	
	res.render('index.ejs', {
		pokemon: pokemon

	});
})

app.get('/pokemon/:id', (req, res) => {
	res.render('show.ejs', {
		poke: pokemon[req.params.id]
	});
	
})



























app.listen(3000, () => {
	console.log("Server is listening on Port 3000")
})