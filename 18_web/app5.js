var fs = require("fs");
var chunk = fs.createReadStream(
    __dirname + "/lipsum.txt",
    { highWaterMark: 1024 }
);

console.log("checkpoint1");

chunk.on("data", function (chunk) {
    console.log(chunk.length);
});

console.log("checkpoint2");

// odczytujemy plik asynchronicznie, drugi log pojawia się przed wypisaniem pierwszej zawartości bufora
