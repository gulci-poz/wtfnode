var express = require("express");
var app = express();

var port = process.env.PORT || 3000;

var people = [
    {
        name: "Karolcia Gulczynska"
    },
    {
        name: "Sebus Gulczynski"
    },
    {
        name: "Wiki Gulczynska"
    },
    {
        name: "Mela Gulczynska"
    }
];

app.set("view engine", "ejs");
app.use("/assets", express.static(__dirname + "/public"));

app.get("/", function (req, res) {

    res.render("index2", { serverPeople: people });

});

app.listen(port);
