// ES6 typed arrays (V8)

// rozmiar w bajtach
// mamy 64 bity w buforze
var buffer = new ArrayBuffer(8);

// obsługa danych binarnych, typed array
// zmiany (write) będą odzwierciedlone w buffer, odczyt jest z bufora za pośrednictwem tej struktury
// mamy 32 bity na liczbę
// przechowamy w tablicy dwie liczby 32-bit
var view = new Int32Array(buffer);
view[0] = 2013;
view[1] = 2015;

// nie będzie błędu, ale bufor nie ma dość miejsca i liczba nie zostanie zapisana
view[2] = 1984;

console.log(view);
