var express = require("express");

var app = express();
var port = process.env.PORT || 3000;

// middleware - kod pomiędzy dwiema warstwami oprogramowania
// middleware w express - kod pomiędzy request i response
// zapewnienie odpowiedzi w powtarzających się scenariuszach
// wiele poziomów middleware - przejście z jednego middleware do innego middleware, który wykonuje dodatkowy kod
// przykład usprwnienia: odpowiedź na żądanie statycznego pliku
// statyczny - nie dynamiczny; w żaden sposób nie przetwarzany (np. generowany) przez kod, np. pliki HTML, CSS, obrazy
// pliki są otrzymywane przez przeglądarkę poprzez wydanie żądania; żądanie nie jest powiązane z konkretnym plikiem, to serwer decyduje jak przetworzyć żądanie - dostarczyć plik czy zrobić co innego
// przyjmuje się konwencję, że pliki statyczne są w folderze public

// node widzi ścieżkę żądania i uruchamia middleware
// ścieżka z żądania nie musi być zgodna z folderami naszej aplikacji, możemy zrobić mapowanie
// użyj middleware static z express
// dla dowolnego pliku z podanych ścieżek
app.use("/assets", express.static(__dirname + "/public"));

// możemy skonstruować własny middleware
// w przypadku takiej samej ścieżki, get i inne metody również się wykonają
// w use możemy pominąć ścieżkę, wtedy wykonuje się on dla dowolnej ścieżki w całej aplikacji
app.use("/", function (req, res, next) {
    // console będzie oczywiście w node, a nie w przeglądarce
    // ścieżka będzie wypisana dla dowolnej ścieżki
    console.log("Request url: " + req.url);
    
    // uruchom następny middleware; obsługa metod HTTP to też middlewary
    next();
});

// w zasobach express są dodatkowe middleware napisane przez innych ludzi, dostępne przez npm

// w przypadku get muszą być podane dokładnie te ścieżki, np. dla ścieżki / get nie obsłuży każdej rozszerzonej ścieżki, np. /hello
// w przypadku use łapie się wszystko wewnątrz

app.get("/", function (req, res) {
    // przeglądarka generuje żądanie pliku css
    // nie potrzebujemy cudzysłowia
    res.send("<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hello world!</h1></body></html>");
});

app.get("/person/:id", function (req, res) {
    res.send("<html><head></head><body><h1>Person: " + req.params.id + "</h1></body></html>");
});

app.get("/api", function (req, res) {
    res.json({ firstname: "Sebastian", lastname: "Gulczynski" });
});

app.listen(port);
