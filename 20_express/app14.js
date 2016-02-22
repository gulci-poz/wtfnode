var express = require("express");
var app = express();

var port = process.env.PORT || 3000;

var sql = require("seriate");

var config = {
    server: '',
    user: '',
    password: '',
    database: ''
}

sql.setDefaultConfig(config);

sql.execute({ query: "" })
    .then(
        function (results) {
            console.log(results);
        },
        function (err) {
            console.log(err);
        }
    );

app.use("/", function (req, res, next) {
    console.log("hello mssql");

    next();
});

app.get("/", function (req, res) {
    res.send("hello mssql");
});

app.listen(port);
