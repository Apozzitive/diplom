'use strict'

const { use } = require('express/lib/application');
const response = require('../response');
const server = require('../server');

var db = require('../settings/database');
exports.sections = (req, res) => {
    db.query(`SELECT topic_title, topic_content FROM section_1 WHERE topic_content LIKE "%${server.inputValue}%"
    UNION
    SELECT topic_title, topic_content FROM section_2 WHERE topic_content LIKE "%${server.inputValue}%"
    UNION
    SELECT topic_title, topic_content FROM section_3 WHERE topic_content LIKE "%${server.inputValue}%"
    UNION
    SELECT topic_title, topic_content FROM section_4 WHERE topic_content LIKE "%${server.inputValue}%"
    UNION
    SELECT topic_title, topic_content FROM section_5 WHERE topic_content LIKE "%${server.inputValue}%"
    UNION
    SELECT topic_title, topic_content FROM section_6 WHERE topic_content LIKE "%${server.inputValue}%"`, (error, rows) => {
        if (error) {
            console.log(error);
        } else {
            response.status(rows, res);
        }
    })
}