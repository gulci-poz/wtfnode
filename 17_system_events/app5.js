// system plików

// moduł JS file.js

var fs = require("fs");

// oczytujemy dane binarne, readFileSync wykorzystuje ideę bufora
// sync - czekamy aż cały string zostanie odczytany przed wykonaniem kolejnej instrukcji JS
// __dirname to jeden z parametrów funkcji, w którą opakowana jest require()
// kodowanie jest opcjonalne, domyślnie jest utf8

var greet = fs.readFileSync(__dirname + "/greet.txt", "utf8");
console.log(greet);

// odczyt asynchroniczny
// domyślne kodowanie - utf8
// brak błędu - null, w przeciwnym wypadku obiekt definiujący błąd
// wzorzec Error-First Callback

var greet2 = fs.readFile(
    __dirname + "/greet.txt",
    "utf8",
    function (err, data) {
        // event loop sprawdza w kolejce zakończone zdarzenia
        // tutaj wykonuje się kod po zakończeniu odczytywania pliku (jeśli inny kod JS się nie wykonuje)

        // odmiennie od sytuacji w callbaku
        // przy konkatenacji obiekt zostanie rozwiązany do stringa
        // przy samodzielnym wypisaniu dostaniemy obiekt bufora z heksalnym zapisem danych binarnych
        // domyślnie w node jest dość duży rozmiar bufora - 64kB
        // w tej metodzie obiekt bufora będzie zawierał całą zawartość pliku po zakończeniu odczytu, można też explicite odczytywać strumień i otrzymywać kolejne zawartości bufora -> app7.js
        // jeśli w wywołaniu readFile dodamy explicite kodowanie utf8, to dostaniemy od razu string
        console.log(data);
        console.log("data read complete: " + data);
    }
);

// może sie pojawić przed rezultatem odczytu asynchronicznego, nie musimy czekać aż ten odczyt wykona się do końca
console.log("Done!");

// bufor to miejsce w pamięci, technicznie bufor jest na kopcu (heap) silnika V8
// jeśli wiele osób odczytuje duży plik, to możemy mieć problem z dużym użyciem pamięci (wiele buforów w pamięci)
// można zmniejszyć rozmiar bufora, żeby zaoszczędzić na pamięci -> app8.js
// gulci's aside - cache w pamięci - dla często odczytywanych plików - czy node coś takiego ma?
