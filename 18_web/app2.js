var http = require("http");

// obiekt serwera to EventEmitter
// argument (funkcja) to callback, który funkcja "listen" wykorzysta jako event listener; uruchomi się, jeśli serwer wyemituje zdarzenie (fikcyjne, JS) "request"
// emitter przekaże do callbaka (listenera) dwa obiekty: req i res (jest to strumień, można wysłać w nim odpowiedź)

http.createServer(function (req, res) {

    // przekazujemy obiekt z parami name/value
    // na wszelki wypadek dajemy cudzysłów, nazwy niektórych pól HTTP nie są zgodne z zasadami JS
    res.writeHead(200, { "Content-Type": "text/plain" });

    // end - wysyłamy dane (body) z informacją, że nie będziemy już więcej wysyłać
    res.write(req.headers["user-agent"] + "\n");
    res.end("Hello world\n");

}).listen(1337, "127.0.0.1");

// mamy "zdarzenie" (dokładniej: jest to funkcja definiująca zdarzenie nasłuchiwania żądania pod wskazanym adresem i na danym porcie) "listen" na obiekcie serwera
// definiujemy zdarzenie: nasłuchiwanie na porcie pod adresem IP; w wypadku wystąpienia zdarzenia "request" (odebranie żądania z przeglądarki) kod wewnątrz obiektu serwera (emitera) da sygnał do listenera (przekazanego jako argument do createServer)
// wyślij żądanie do 127.0.0.1, użyj portu 1337 (szukaj programu pod takim adresem) - tutaj serwer nasłuchuje żadania
// routujemy zapytanie do kodu JS (do listenera)
// jeśli przeglądarka wyśle takie żądanie, to proces (obiekt) serwera przyjmie to żądanie

// przeglądarka zawsze żąda favicon.ico
// nasz kod odpowie tekstem, przeglądarka to zignoruje
