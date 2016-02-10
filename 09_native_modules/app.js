// natywne moduły (native, core), nazywane też API
// w dokumentacji mamy co zwraca require
// niektóre są global, np. Console, nie trzeba ich ładować za pomocą require
// część tych komponentów to po prostu wrapery na kod C++, część to pure JS

// nie potrzebujemy ./ ponieważ nie przeszukujemy tym razem naszego folderu
var util = require("util");

var name = "Sebastian";
// możemy podać więcej zmiennych
var greeting = util.format("Hello, %s", name);
// log dodaje timestamp
util.log(greeting);

// nasz własny moduł możemy nazwać tak samo ja natywny, odwołujemy się w require dodająć ./
// lepiej unikać takich zawiłości
