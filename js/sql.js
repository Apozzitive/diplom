const mysql = require('mysql');
const express = require('express');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "my_data_base",
    password: "root"
});

const app = express();

connection.connect(err => {
    if (err) {
        console.log(err);
        return err;
    } console.log("Database ------ connected");
});

let query = "SELECT * FROM section_1";


connection.query(query, (err, result) => {
    console.log(err);
    something = result[0]['topic_content'];
});
let something;
console.log(something);
connection.end(err => {
    if (err) {
        console.log(err);
        return err;
    } console.log("Database ------ close");
})
