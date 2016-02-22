// NoSQL
// w dokumentowej bazie danych przechowujemy strukturę i dane razem, w jednym pliku
// dodanie nowego pola jest łatwe, dodajemy je tylko dla wskazanego rekordu, pozostałe będą miały to pole undefined
// w jednej tablicy (kolekcji) mogą być obiekty (dokumenty) o różnej strukturze
// elastyczność kosztem miejsca na dysku
// mongolab.com - mongodb w chmurze
// zapisujemy do formatu BSON - Binary JSON

var express = require("express");
var app = express();

var mongoose = require("mongoose");

// połączenie jest zapamiętywane na zmiennej mongoose
mongoose.connect("mongodb://localhost/bookAPI");

var Schema = mongoose.Schema;

var bookSchema = new Schema({
    title: String,
    author: String,
    genre: String,
    read: Boolean
});

var Book = mongoose.model("Book", bookSchema);

var bookInstance = Book({
    title: "The Lord of the Rings: The Two Towers",
    author: "J. R. R. Tolkien",
    genre: "Fiction Fantasy",
    read: true
});

bookInstance.save(function (err) {
    if (err) {
        throw err;
    }

    console.log("book saved");
});

var apiController = require("./controllers/apiController");
var htmlController = require("./controllers/htmlController");

var port = process.env.PORT || 3000;

app.use("/assets", express.static(__dirname + "/public"));

app.set("view engine", "ejs");

app.use("/", function (req, res, next) {
    // wypisujemy wszystkie obiekty, w takim wypadku ten parametr nie jest potrzebny
    Book.find({}, function (err, books) {
        if (err) {
            throw err;
        }

        console.log(users);
    });

    next();
});

htmlController(app);

apiController(app);

app.listen(port);
