var express = require("express");

var app = express();
var port = process.env.PORT || 3000;

/*
app.get("/*", function (req, res) {
    
    // logi pojawiają się po dwa razy
    // również przy żądaniu innych urli, np. api
    // nie ma na to wpływu ładowanie CSS i favicon
    // to samo przy użyciu use i get
    
    console.log("Request url: " + req.url); 
});
*/

// to samo ze ścieżką /
app.use(function (req, res, next) {
    console.log("Request url: " + req.url);
    next(); 
});

app.listen(port);
