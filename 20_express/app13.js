var express = require("express");
var app = express();

var port = process.env.PORT || 3000;

var sql = require("mssql");

var config = {
    user: '',
    password: '',
    server: '',
    database: '',

    options: {
        trustedConnection: true
    }
}

sql.connect(config)
    .then(function () {
        new sql.Request().query("")
            .then(function (recordset) {
                console.log(recordset);
            }).catch(function (err) {
                console.log(err);
            });
    });

app.use("/", function (req, res, next) {
    console.log("hello mssql");

    next();
});

app.get("/", function (req, res) {
    res.send("hello mssql");
});

app.listen(port);
