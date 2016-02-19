var express = require("express");
var cookieParser = require("cookie-parser");
var serveFavicon = require("serve-favicon");

var app = express();
var port = process.env.PORT || 3000;

// wyłączamy żądania ikony przez przeglądarki
// trzeba podać jakąś ścieżkę, inaczej będzie error
// używamy przed innymi use
app.use(serveFavicon("public/favicon.ico"));

app.use(cookieParser());

// nie działa dla dynamicznie generowanych urli (np. /person/:id)
// w szablonie w ścieżce do CSS trzeba dodać korzeń
// przeglądarka nie wie, co dzieje się w node, zna tylko request i response
app.use("/assets", express.static(__dirname + "/public"));

// unopinionated - mamy wybór dla danego rozwiązania
// template engines - możemy zbudować swój silnik; możemy też zainstalować silnik przez npm i "podpiąć" go w express

// ejs zintegruje się z express
// express będzie szukał statycznych plików z szablonami w folderze views
// view = user interface; template engine = view engine
// niektóre silniki cache-ują zawartość szablonów
app.set("view engine", "ejs");

app.use("/", function (req, res, next) {
    //console.log("Request url: " + req.url); 
    //console.log("Cookies: ", req.cookies);
    next();
});

app.get("/", function (req, res) {
    // renderujemy html z szablonu
    // nie podajemy rozszerzenia, zmiana silnika szablonów może być dzięki temu natychmiastowa
    res.render("index");
});

app.get("/person/:id", function (req, res) {
    // wewnątrz szablonu ejs możemy pisać kod JS
    // przekazywany obiekt nazywamy też modelem
    // w ejs mamy includes (np. header i footer)
    // inne języki szablonów mają też layouts
    // handlebars - z backbone.js
    // jade - nie trzeba pisać nawiasów <>
    res.render("person", { ID: req.params.id });
});

app.get("/api", function (req, res) {
    res.json({ firstname: "Sebastian", lastname: "Gulczynski" });
});

app.listen(port);
