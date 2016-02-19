var express = require("express");

var app = express();
var port = process.env.PORT || 3000;

app.use("/assets", express.static(__dirname + "/public"));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("index");
});

app.get("/person/:id", function (req, res) {
    // obiekt req z express radzi sobie z querystringiem z GET (jest w nagłówku HTTP)
    // dla POST trzeba przetworzyć ciało zapytania, tego nie ma standardowo w express, trzeba użyć middleware (lub możemy sami)
    // qstr to name z danej pary name/value; dla każdej nazwy dajemy właściwość na obiekcie req.query
    res.render("person2", { ID: req.params.id, Qstr: req.query.qstr });
});

app.get("/api", function (req, res) {
    res.json({ firstname: "Sebastian", lastname: "Gulczynski" });
});

app.listen(port);

/* przykład GET z querystringiem
GET /?id=4&page=3 HTTP/1.1
Host: www.gulci.pl
Cookie: username=gulci;name=Gulci
*/

/* przykład POST z querystringiem
POST / HTTP/1.1
Host: www.gulci.pl
Content-Type: application/x-www-form-urlencoded
Cookie: num=4;page=2
username=gulci&password=abc
*/

/* przykład wysłania danych JSON (można użyć jQuery)
POST / HTTP/1.1
Host: www.gulci.pl
Content-Type: application/json
Cookie: num=4;page=2
{
    "username": "gulci",
    "password": "abc"
}
*/
