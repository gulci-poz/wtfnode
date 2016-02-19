var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var port = process.env.PORT || 3000;

// to będzie funkcja (middleware)
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// to również jest funkcja
var jsonParser = bodyParser.json();

app.use("/assets", express.static(__dirname + "/public"));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("index2");
});

app.get("/person/:id", function (req, res) {
    res.render("person2", { ID: req.params.id, Qstr: req.query.qstr });
});

// urlencodedParser to callback, który robi za middleware (podobnie by było z użyciem use, tutaj mamy zgodnie z przykładem twórców)
// dla tej ścieżki z post zostanie uruchomiona urlencodedParser i nasza funkcja (next)
// urlencodedParser dodaje do req zmienną body z właściwościami
app.post("/person", urlencodedParser, function (req, res) {
    res.send("Thank you!");
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

app.post("/personjson", jsonParser, function (req, res) {
    res.send("Thank you for the JSON data!");
    
    // obiekt JSON zostanie przekształcony do JS
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

app.get("/api", function (req, res) {
    res.json({ firstname: "Sebastian", lastname: "Gulczynski" });
});

app.listen(port);
