var fs = require("fs");
var readable = fs.createReadStream(
    __dirname + "/lipsum.txt",
    // jeśli dodamy kodowanie, to obiekt bufora zostanie rozwiązany do stringa
    //{ encoding: "utf8" }
    // w tym samym obiekcie możemy określić rozmiar bufora w bajtach
    { highWaterMark: 16 * 1024 }
);

// createReadStream() zapisuje do bufora
// emituje zdarzenia "data" i uruchamia wszystkie listenery
// jeśli jest więcej danych (dane nie mieszczą sie w buforze o danym rozmiarze), to bufor jest opróżniany i zapełniany na nowo danymi ze strumienia

var countBuffers = 0;

readable.on("data", function (chunk) {
    // chunk - dane przekazane do listenera po zapełnieniu się bufora
    // 64kB - domyślny rozmiar bufora
    console.log(chunk);
    console.log(chunk.length);
    countBuffers++;
});

/*
// można też za pomocą arrow function expression
readable.on("data", (chunk) => {
    // binduje this wywołującej funkcji, nie binduje swojego this
    console.log(this);
});
*/

// zakończenie odczytu
readable.on("end", () => {
    console.log("Total buffers used: " + countBuffers);
});

// strumień i wszystkie zasoby zostaną zamknięte (również zamknięcie deskryptora pliku)
// nie wszystkie strumienie emitują close
readable.on("close", () => {
    console.log("Read operation finished");
});
