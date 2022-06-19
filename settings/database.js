const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'my_data_base'
});

connection.connect((error) => {
    if (error) {
        return console.log('-----DataBase not connected-----');
    } return console.log('-----DataBase Connected-----');
})

module.exports = connection;