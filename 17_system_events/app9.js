// pipes

// połączenie dwóch strumieni, zapisanie danych odczytanych z jednego w drugim, np. w node readable -> writable
// jeśli kolejny strumień jest również do odczytu, to można zrobić kolejną pipe (chain lub connection)
// dzięki temu można wykonywać różne operacje na jednym wycinku danych (chunk)

var fs = require("fs");
// umożliwia utworzenie gzipa
var zlib = require("zlib");

var readable = fs.createReadStream(__dirname + "/lipsum.txt");
var writable = fs.createWriteStream(__dirname + "/lipsum_copy.txt");
var compressed = fs.createWriteStream(__dirname + "/lipsum.txt.gz");

// tworzy się transform stream (readable/writable), kompresuje chunks
// nie musi być koniecznie file stream, np. połączenie z Internetem lub bazą danych
var gzip = zlib.createGzip();

// metoda pipe jest dostępna na strumieniu Readable
// przekazujemy strumień Writable, ten sam strumień jest zwracany

readable.pipe(writable);

readable.pipe(gzip).pipe(compressed);

// chaining - czasami metoda zwraca parent object (cascading), a czasami inny obiekt

// w rzeczywistych aplikacjach preferujemy asynchroniczność
