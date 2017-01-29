import express from 'express'
import path from 'path'
import fs from 'fs'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import { getMatches } from './src/utils/t9converter'
import { MAXLENGTH } from './src/constants/keys'

const app = express()

let corsConfig = {
	origin: '*',
	methods: ["GET"]
}

let accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(morgan('common', {stream: accessLogStream}))

app.get('/api', cors(corsConfig), (req, res) => {
	let number = req.query.number
	let dictionary = req.query.dictionary
	if(number.toString().length > MAXLENGTH ) {
		var shortenNumber = number.toString().substring(0, MAXLENGTH)
		number = parseInt(shortenNumber, 10)
	}
	res.json(getMatches(number, dictionary))
})

//404
app.get('*', (req, res) => {
	res.send('aww.')
})

const port = process.env.PORT || 8080
const env = process.env.NODE_ENV || 'development'

app.listen(port, err => {
	if (err) {
		return console.error(err)
	}
	console.info(`Server running on http://localhost:${port} [${env}]`)
})