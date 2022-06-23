const mysql = require('mysql');

/* const connection = mysql.createConnection({
    host: 'us-cdbr-east-05.cleardb.net',
    user: 'b04f3e091ff39f',
    password: '6468eb76',
    database: 'heroku_eda79bf60c6eb17'
}); */

const pool = mysql.createPool({
    connectionLimit: 5,
    host: 'us-cdbr-east-05.cleardb.net',
    user: 'b04f3e091ff39f',
    password: '6468eb76',
    database: 'heroku_eda79bf60c6eb17',
})

/* connection.connect((error) => {
    if (error) {
        return console.log('-----DataBase not connected-----');
    } return console.log('-----DataBase Connected-----');
}) */

module.exports = pool;