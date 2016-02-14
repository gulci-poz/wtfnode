// strumienie

// chunks - porcje danych przeznaczone do wysłania strumieniem

// Stream dziedziczy z EventEmitter

// w node mamy różne rodzaje strumieni (wcześniej był jeden rodzaj)
// Readable, Writable, Duplex - read, write, read + write danych z/do strumienia
// Transform - możliwość zmiany danych w trakcie przemieszczania się strumieniem
// PassThrough
// operacje odczytu i zapisu z punktu widzenia node (abstrakcyjność)
// np. komunikacja przeglądarka - serwer web (node), request jest z punktu widzenia node readable, response jest dla node writable (ale przeglądarka będzie te dane odczytywała)

// strumień to klasa bazowa (abstrakcyjna); to nie to samo, ale często używa się tych terminów zamiennie
// klasa abstrakcyjna - typ konstruktora, z którym nie pracujemy bezpośrednio, tylko z niego dziedziczymy
// tworzymy nowy obiekt, który tylko dziedziczy ze Stream, sami decydujemy jak zaimplementować niektóre metody; tworzymy obiekt pod kątem wykonania konkretnej operacji, np. odczytu pliku; strumienie wykonujące konkretne zadanie są dostępne w node

// w fs mamy funkcję createReadStream(), która zwraca obiekt ReadStream, ten z kolei dziedziczy z Readable, dalej ze Stream, i w końcu z EventEmitter
// mamy zatem wyspecjalizowany obiekt read stream
