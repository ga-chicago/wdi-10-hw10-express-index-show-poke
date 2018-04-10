const express = require('express');
const app = express();

const PORT = 3000;

app.listen(3000, () => {
	console.log('listening on port 3000');
})

app.get('/', (req, res) => {
	res.send("Welcome to the Pokemon App!");
})