const express = require('express');
const app = express();
const port = 3000;
const pokemon = require('./models/pokemon.js')

app.get('/',(request,response)=>{
	response.send('Welcome to the Pokemon App!');
});

app.get('/pokemon',(request,response)=>{
	response.render('index.ejs',{
		pokemon: pokemon
	});
});

app.get('/pokemon/:index',(request,response)=>{
	response.send(request.params.index);
});

app.listen(port,(request,response)=>{
	console.log('listening at port 3000');
});