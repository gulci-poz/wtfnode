var express = require("express");

// zbiera ciasteczka tylko dla naszej aplikacji
var cookieParser = require("cookie-parser");

var app = express();
var port = process.env.PORT || 3000;

// uruchamiamy cookie-parser dla dowolnego urla
app.use(cookieParser());

app.use("/assets", express.static(__dirname + "/public"));

app.use("/", function (req, res, next) {
    console.log("Request url: " + req.url);
    
    // mamy dostęp do wyników działania cookie-parser
    console.log("Cookies: ", req.cookies);
    
    next();
});

app.get("/", function (req, res) {
    res.send("<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hello world!</h1></body></html>");
});

app.get("/person/:id", function (req, res) {
    res.send("<html><head></head><body><h1>Person: " + req.params.id + "</h1></body></html>");
});

app.get("/api", function (req, res) {
    res.json({ firstname: "Sebastian", lastname: "Gulczynski" });
});

app.listen(port);
