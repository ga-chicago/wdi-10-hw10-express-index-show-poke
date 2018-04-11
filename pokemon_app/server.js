const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const PORT = 3000;

const pokemon = require('./models/pokemon.js')

app.use(express.static('public'))


app.get('/', (req, res) => {
	res.send("Welcome to the Pokemon App!");
});

// **index route**
app.get('/pokemon', (req, res) => {
	res.render('index.ejs', {
		thePokemon: pokemon
	});
});

// **show route**
app.get('/pokemon/:id', (req, res) => {
	res.render('show.ejs', {
		pokemon: pokemon[req.params.id]
	});
})

app.listen(PORT, () => {
	console.log("server listening on port 3000");
});