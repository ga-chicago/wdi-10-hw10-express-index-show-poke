const express = require('express');
const app = express();

app.get('/', (reg,res) => {
	res.send('Welcome to the Pokemon App!');
})






















const port = 3000
app.listen(port, (req,res) => {
	console.log('listening for port ' + port)
})