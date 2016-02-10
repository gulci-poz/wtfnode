// jeśli require nie znajdzie pliku .js, to przeszukuje folder o wskazanej nazwie i ładuje index.js

// JSON używamy zarówno w dev, jak i w produkcji

// nie używamy JSON do przechowywania bezpiecznej konfiguracji w rzeczywistej aplikacji

var greet = require("./greet");

greet.english();
greet.spanish();
