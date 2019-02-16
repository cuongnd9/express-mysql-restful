const db = require('../../models/dbConnection')

module.exports.index =  (req, res) => {
	const sql = 'SELECT * FROM cats'

	db.query(sql, (error, results) => {
		if (error) throw error
		res.json(results)
	})
}

module.exports.post = (req, res) => {
	const data = req.body
	const sql = 'INSERT INTO cats SET ?'

	db.query(sql, data, (error, results) => {
		if (error) throw error
		res.json({ message: 'cat is created!' })
	})
}