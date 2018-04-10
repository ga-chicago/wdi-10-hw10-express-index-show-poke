const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const PORT = 3000;

app.get('/', (req, res) => {
	res.send("Welcome to the Pokemon App!");
})


app.listen(PORT, () => {
	console.log("server listening on port 3000");
})