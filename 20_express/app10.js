var express = require("express");

var app = express();

var apiController = require("./controllers/apiController");
var htmlController = require("./controllers/htmlController");

var port = process.env.PORT || 3000;

app.use("/assets", express.static(__dirname + "/public"));

app.set("view engine", "ejs");

// separacja routes do modułów w folderze controllers

// separujemy inne zapytania HTTP do modułu htmlController
htmlController(app);

// separujemy API do modułu apiController
apiController(app);

app.listen(port);
