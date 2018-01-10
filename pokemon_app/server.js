const express = require('express');
const app = express();
const port = 3000;

app.get('/',(request,response)=>{
	response.send('Welcome to the Pokemon App!');
});

app.listen(port,(request,response)=>{
	console.log('listening at port 3000');
});