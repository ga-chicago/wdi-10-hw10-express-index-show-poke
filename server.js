const express = require('express');
const app = express();
const port = 3000;
const pokemon = require('./models/pokemon.js')


app.get('/', (req, res)=>{
	res.send('Welcome To The Pokemon App!')
})


app.get('/pokemon', (req, res)=>{
	res.render('index.ejs',{
		thePokemon: pokemon
	});
})


app.get('/pokemon/:id', (req, res)=>{
	res.render('show.ejs',{
		poke: pokemon[req.params.id]
	})
})





app.listen(port,()=>{
	console.log('Server is listening on port 3000');
})