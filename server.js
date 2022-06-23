const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT;
const bodyParser = require('body-parser');


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname))

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
})

app.post("/search.html", function (req, res) {
    if (!req.body) return res.sendStatus(400);
    const inputValue = Object.values(req.body)[0];
    exports.inputValue = inputValue;
    // res.send(`${req.body.input}`);
});
app.post("/", function (req, res) {
    if (!req.body) return res.sendStatus(400);
    const inputValue = Object.values(req.body)[0];
    exports.inputValue = inputValue;
    // res.send(`${req.body.input}`);
});
/* app.post("/index.html", function (req, res) {
    if (!req.body) return res.sendStatus(400);
    const inputValue = Object.values(req.body)[0];

    // console.log(inputValue);
    if (inputValue.trim().length == 0) {
        exports.inputValue = inputValue;
    }
    // res.send(`${req.body.input}`);
}); */

const routes = require('./settings/routes');
routes(app)
app.listen(port, () => {
    console.log(`App listen on port ${port}`);
})
