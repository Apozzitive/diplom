'use strict'
const { use } = require('express/lib/application');
const response = require('../response');

const db = require('../settings/database');
exports.labs = (req, res) => {
    db.query(`SELECT * FROM labs`, (error, rows) => {
        if (error) {
            console.log(error);
        } else {
            response.status(rows, res);
        }
    })
}