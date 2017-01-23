import express from 'express';
import react from 'react';
import path from 'path';
import bodyParser from 'body-parser'

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api', (req, res) => {
	res.json(req.body);
});

const port = process.env.PORT || 8080;
const env = process.env.NODE_ENV || 'production';

app.listen(port, err => {
	if (err) {
		return console.error(err);
	}
	console.info(`Server running on http://localhost:${port} [${env}]`);
});