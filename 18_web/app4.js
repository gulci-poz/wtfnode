var http = require("http");
var fs = require("fs");

http.createServer(function (req, res) {

    res.writeHead(200, { "Content-Type": "text/html" });
    // buforujemy strumień i przekazujemy pipem bezpośrednio do strumienia res
    // czy odczyt za pomocą strumienia implikuje asynchroniczność?
    // tak, to jak odczyt asynchroniczny, ale z dostępem do bufora -> app5.js
    fs.createReadStream(__dirname + "/index2.html", "utf8").pipe(res);

    // w node core nie ma możliwości podstawiania pod template w strumieniu

}).listen(1337, "127.0.0.1");
