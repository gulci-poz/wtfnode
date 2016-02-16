var fs = require("fs");
var readable = fs.createReadStream(
    __dirname + "/lipsum.txt",
    { highWaterMark: 16 * 1024 }
);

// nie musimy podawać rozmiaru bufora, będzie zapisywał taką porcję danych jaką dostanie
var writable = fs.createWriteStream(__dirname + "/lipsum_copy.txt");

readable.on("data", function (chunk) {
    // da się to zrobić szybciej w node -> pipe
    writable.write(chunk);
});
