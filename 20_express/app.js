// express to czysty JS, nie ma tam żadnego kodu C/C++
var express = require("express");

// express zwraca funkcję, app jest funkcją na której mamy zdefiniowane użyteczne metody; sama funkcja express() nie jest konstruktorem
var app = express();

// zmienne środowiskowe - globalne zmienne środowiska (serwera), gdzie znajduje się (wykonuje się) nasz kod; możemy korzystać z tych zmiennych w naszym kodzie

// process to zmienna globalna, udostępniona przez node
// jeśli zmienna PORT nie istnieje w danym środowisku (np. w testowym), to domyślnie korzystamy z portu 3000
var port = process.env.PORT || 3000;

// metoda HTTP (verb) - akcja, którą żądanie zgłasza do wykonania na serwerze, np. GET, POST, DELETE; w żądaniu przesyłamy dane i pole w którym jest podana akcja do wykonania

// routing w express
// funkcje w express (pisane małymi literami) zawierają kod, który ma się wykonać po przyjściu odpowiedzi na wysłane żądanie (kod wykonuje się w callbaku)
// req i res to zmienne express, które wrapują zmienne node
// do tego samego urla można dodać obsługę innego typu żądania, np. post
app.get("/", function (req, res) {
    // express i obiekt res widzą, co wysyłamy do przeglądarki i same zadbają o nadanie content type
    res.send("<html><head></head><body><h1>Hello world!</h1></body></html>");
});

// :id oznacza cokolwiek w ścieżce za /person
// id to zmienna zawarta w żądaniu
// jeśli w żądaniu (url w przeglądarce) nic nie podamy, to dostaniemy "Cannot GET"
app.get("/person/:id", function (req, res) {
    res.send("<html><head></head><body><h1>Person: " + req.params.id + "</h1></body></html>");
});

app.get("/api", function (req, res) {
    // tutaj również nie musimy się przejmować content type
    res.json({ firstname: "Sebastian", lastname: "Gulczynski" });
});

app.listen(port);
