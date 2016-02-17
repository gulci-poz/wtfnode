var http = require("http");
var fs = require("fs");

http.createServer(function (req, res) {

    res.writeHead(200, { "Content-Type": "text/html" });
    // utf8, potrzebujemy stringa to przetwarzania template
    // res to strumień, więc tam wystarczą dane binarne
    var html = fs.readFileSync(__dirname + "/index.html", "utf8");
    var message = "Hello world from template!";
    html = html.replace("{Message}", message);
    res.end(html);

}).listen(1337, "127.0.0.1");

// zmiana w pliku html nie wymaga restartu serwera, html nie jest konwertowany przez silnik JS do kodu maszynowego, plik html za każdym żądaniem jest odczytywany z dysku

// uzupełnienie placeholderów z templates wymaga restartu serwera (programu node, a dokładniej: ponownego przetworzenia przez silnik JS do kodu maszynowego i uruchomienia programu node)

// templates - placeholdery (w html - stringu) dla zawartości, która zostanie wygenerowana przez kod
// ogólnie, template - tekst, który jest bazą dla ostatecznego tekstu lub zawartości po przetworzeniu template
// języki szblonów, template systems
// template engines - mechanizmy podstawiania zawartości za placeholdery, nie ma czegoś takiego w node core
// szablony są dynamiczne
