/*

Czego potrzebuje js, żeby zarządzać serwerem:
- organizacja kodu w moduły gotowe do ponownego użycia, nie kolidujące z pozostałym kodem (node, ES6)
- obsługa plików
- obsługa bazy danych
- możliwość komunikacji przez Internet
- możliwość odbierania żądań i wysyłania odpowiedzi w standardowy sposób (HTTP Requests/Responses)
- zdolność do wykonywania obliczeń, które potrzebują dużo zasobów i czasu

Node.js opakowuje silnik V8 (kod C++) dodatkowym kodem C++ i oferuje szereg dodatkowych możliwości eksponowanych za pomocą js (ściślej: za pomocą powiązań w kodzie V8); wymienione wyżej funkcje serwera web to tylko niektóre z tych możliwości.

Node.js to po prostu program napisany w C++, który jako podstawę wykorzystuje V8 i eksponuje dodatkowe funkcje za pomocą js (silnika V8) lub narzędzi dostępnych z poziomu konsoli.

Na bardzo wysokim poziomie, node.js to rozbudowany silnik V8.

V8 w przeglądarce obsługuje nie tylko kod js zgodny z ECMA; świetnym przykładem jest DOM, który nie jest częścią standardu (a który jest eksponowany przez przeglądarkę za pomocą js; tym samym przeglądarka umożlwia jego przetwarzanie w silniku js). Również konsola js w dev tools. V8 w przeglądarce, podobnie jak V8 w node.js jest wzbogacony dodatkowymi funkcjami, odpowiednimi do kontekstu działania (z jednej strony środowisko przeglądarki, a zatem klienta; z drugiej, środowisko samodzielnego komputera, np. pełniącego rolę serwera, w tym serwera web).

V8 i npm są zależnościami w projekcie node.js. Są jeszcze inne zależności, np. libuv, http_parser, zlib. Są to biblioteki C++.

JavaScript core - podstawowy js i narzędzia C++ eksponowane przez V8 jako narzędzia js. Są też narzędzia dostępne z poziomu konsoli.

Narzędzia js to biblioteki js, które w większości są wraperami na funkcje (dokładniej: obiekty) C++ (process.binding). Są też biblioteki natywne js.

Node.js to framework i biblioteka kodu. Funkcje frameworku są realizowane za pomocą narzędzi js i konsolowych.

Naszym środowiskiem wykonywania kodu js jest node.js. Po stronie klienta takim środowiskiem jest przeglądarka.

*/

/*

Moduły
- moduły commonjs

First-Class Functions and Function Expressions
- funkcji First-Class można używać w podobny sposób jak pozostałe typy, można je przekazywać, przypisywać do zmiennych, przechowywać w tablicy i inne; można pisać Function Expressions
- wyrażenie - blok kodu, którego wykonanie daje wartość (podobnie jak liczba lub string); Function Expressions są możliwe dzięki temu, że funkcje w js są First-Class
- funkcje w js są obiektami specjalnego typu

Name/Value Pair
- wartością może być typ prymitywny, obiekt lub funkcja (kiedy funkcja jest połączona z obiektem, to mamy metodę)
- literał obiektu - pary name/value, oddzielone przecinkiem, ujęte w klamry

*/