const express = require('express');
const app = express();
const api = require('./api');
const mongooose = require("./config/mongoose");

app.use(api);

app.listen(3000, () => {
	console.log('Listening on port 3000!');
	mongooose();
})