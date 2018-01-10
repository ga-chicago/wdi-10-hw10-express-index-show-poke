const express = require('express');
const app = express();
const port = 3000;
const pokemon = require('./models/pokemon.js');

//Middleware
app.use(express.static('public'));

app.get('/',(request,response)=>{
	response.send('Welcome to the Pokemon App!');
});

app.get('/pokemon',(request,response)=>{
	response.render('index.ejs',{
		pokemon: pokemon
	});
});

app.get('/pokemon/:index',(request,response)=>{
	response.render('show.ejs', {
		pokemon: pokemon[request.params.index]
	});
});

app.listen(port,(request,response)=>{
	console.log('listening at port 3000');
});