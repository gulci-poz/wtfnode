// REST - Representational State Transfer - styl architektury do budowania API
// HTTP verbs i URLe mają znaczenie - REST standaryzuje te dwa aspekty, w taki sposób, że mają one pokrycie z tym, co ma sie wydarzyć
// dane JSON, czyste URLe z dobrą strukturą, powiązanie z odpowiednimi metodami: get, post, delete
// nie dajemy HTTP verbs w URLach

var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var port = process.env.PORT || 3000;

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use("/assets", express.static(__dirname + "/public"));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("index2");
});

app.get("/person/:id", function (req, res) {
    res.render("person2", { ID: req.params.id, Qstr: req.query.qstr });
});

app.post("/person", urlencodedParser, function (req, res) {
    res.send("Thank you!");
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

// idea RESTful API
// mamy dobre ścieżki URL
// metody HTML mają pokrycie z zadaniami do wykonania
// używamy JSON

app.get("/api/person/:id", function (req, res) {
    // get that data from database
    res.json({ firstname: "John", lastname: "Doe" });
});

app.post("/api/person", jsonParser, function (req, res) {
    // save to the database
});

app.delete("/api/person/:id", function (req, res) {
    // delete from the database
});

app.listen(port);
