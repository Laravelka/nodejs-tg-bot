'use strict';

const Connect = require('../helpers/Connect');

module.exports = class User {
	constructor() {
		this.db = new Connect();
	}
}