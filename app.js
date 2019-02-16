require('dotenv').config()

const express = require('express')
const chalk = require('chalk')

const app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
	res.send('Chao Xin!')
})

app.listen(port, () => console.log(chalk.bgRed(`app is listening on port ${port}`)))