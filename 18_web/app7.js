// tworzymy api endpoint

var http = require("http");
var fs = require("fs");

// bez routingu każdy url dostanie w odpowiedzi te same dane
// url jest częścią danych wysyłanych w żądaniu HTTP

http.createServer(function (req, res) {

    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.createReadStream(__dirname + "/index2.html").pipe(res);
    }

    else if (req.url === "/api") {
        res.writeHead(200, { "Content-Type": "application/json" });
        var obj = {
            firstname: "Sebastian",
            lastname: "Gulczynski"
        };
        res.end(JSON.stringify(obj));
    }

    // dla wszystkich pozostałych urli
    else {
        res.writeHead(404);
        res.end();
    }

}).listen(1337, "127.0.0.1");

// -> automatyzacja routingu
// node cowork
// express
