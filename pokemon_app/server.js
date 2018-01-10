const express = require('express');
const app = express();
const port = 3000;
const pokemon = require('./models/pokemon.js')

app.get('/',(request,response)=>{
	response.send('Welcome to the Pokemon App!');
});

app.get('/pokemon',(request,response)=>{
	response.send(pokemon);
});

app.listen(port,(request,response)=>{
	console.log('listening at port 3000');
});