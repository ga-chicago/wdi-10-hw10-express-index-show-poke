const express = require('express');
const app = express();

const PORT = 3000;

const pokemon = require('./models/pokemon.js');

console.log(pokemon);

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
	res.send(req.params.id);
})
