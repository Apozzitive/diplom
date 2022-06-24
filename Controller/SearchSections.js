'use strict'

const { use } = require('express/lib/application');
const response = require('../response');
const server = require('../server');

var db = require('../settings/database');
exports.sections = (req, res) => {
    db.query(`SELECT topic_title, topic_content FROM section_1"
    UNION
    SELECT topic_title, topic_content FROM section_2"
    UNION
    SELECT topic_title, topic_content FROM section_3"
    UNION
    SELECT topic_title, topic_content FROM section_4"
    UNION
    SELECT topic_title, topic_content FROM section_5"
    UNION
    SELECT topic_title, topic_content FROM section_6"`, (error, rows) => {
        if (error) {
            console.log(error);
        } else {
            response.status(rows, res);
        }
    })
}