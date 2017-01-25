import express from 'express';
import react from 'react';
import path from 'path';
import bodyParser from 'body-parser'

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api', (req, res) => {
	//[TODO] send json response here
	let x = req.query.number * 2;
	res.json(x);
});

const port = process.env.PORT || 8080;
const env = process.env.NODE_ENV || 'production';

app.listen(port, err => {
	if (err) {
		return console.error(err);
	}
	console.info(`Server running on http://localhost:${port} [${env}]`);
});