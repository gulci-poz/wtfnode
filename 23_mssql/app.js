var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

// ===== mssql start =====

var sql = require("mssql");

// konfiguracja mssql
// http://blog.citrix24.com/configure-sql-express-to-accept-remote-connections/

var config = {
    user: "",
    password: "",
    server: "",
    database: ""
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

// ===== mssql end =====

app.use("/", function (req, res, next) {
    console.log("hello mssql");

    next();
});

app.get("/", function (req, res) {
    res.send("hello mssql");
});

app.listen(port);
