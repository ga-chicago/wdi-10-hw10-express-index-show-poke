const express = require('express');
const app = express();

const PORT = 3000;

const pokemon = require('./models/pokemon.js');

app.use(express.static('public'));

app.listen(PORT,() => {
	console.log("Server is listening on port "+PORT);
});

app.get('/',(req,res) => {
	res.send('Welcome to the Pokemon App!');
});

app.get('/pokemon',(req,res) => {
	res.render('index.ejs',{
		pokemon: pokemon
	});
});

app.get('/pokemon/:id',(req,res) => {
	res.render('show.ejs',{
		pokemon: pokemon[req.params.id]
	});
})
