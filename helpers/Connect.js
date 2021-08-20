const mysql = require('mysql');
const { db } = require('../config');

function Connect() {
	this.connect = mysql.createConnection(db);
}

module.exports = Connect;
