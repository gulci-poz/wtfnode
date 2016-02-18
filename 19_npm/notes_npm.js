// npm - node package manager
// package - kod (kolekcja kodu) zarządzanego i utrzymywanego przez system zarządzania pakietami (package manager); kod gotowy do użycia
// package management system - oprogramowanie, które automatyzuje instalację i aktualizację pakietów; kontroluje wersję pakietu - co mam, czego potrzebuję; zarządza zależnościami
// dependency - kod, od którego zależy działanie innego kodu; każdy kod, którego używamy w naszej aplikacji jest zależnością
// pakiet może mieć dalsze zależności

// semantic versioning (semver)
// versioning - specyfikowanie z jaką wersją kodu (lub zestawu kodu) mamy do czynienia; śledzenie nowej wersji
// nowe funkcje oraz "breaking changes" - zmiany, które mogą sprawić, że nasz dotychczasowy kod, który zależał od starej wersji pakietu, przestanie działać
// semantyczny versioning - numer wersji niesie ze sobą znaczenie
// major.minor.patch
// patch - naprawienie bugów, nie psuje kodu użytkownika
// minor - dodanie nowych funkcji, kod użytkownika nadal działa poprawnie
// major - duże zmiany, kod użytkownika może (ale nie musi) nie działać
// semver.org
// npm - program (PM system) lub node registry
// node -v
// npm -v
// npmjs.com
// npm init
// npm help json - szczegóły zawartości package.json
// nazwa aplikacji musi być url friendly
// npm test - w sekcji scripts definiujemy komendy, początkowo jest tylko test
// node_modules w .gitignore
// npm install pakiet --save - instaluje pakiet i zapisuje jako zależność w package.json
// npm install moment --save
// instalacja lokalnie w node_modules
// npm install moment -g (lub bezpośrednio po install; uprawnienia na mac/linux)
// instalacja globalnie w systemie
// ^ - automatyczny update dla minor i patch
// ~ - update patch
// npm install - instaluje zależności z package.json
// npm update - aktualizacja zależności z package.json
// development dependencies
// npm install jasmine-node --save-dev
// npm install --production
// na serwerach są narzędzia, które same za pomocą npm ściągną zależności
// devDependencies zostaną zignorowane; jeśli są na serwerze gloablne pakiety, to można by nie instalować ich lokalnie z aplikacją
// npm install -g nodemon
// lokalizacja node-modules globalnie C:\Users\gulci\AppData\Roaming\npm
// jest tam też folder npm-cache
// npm cache clean
// moduły mają swoje foldery node_modules - tam są zależności modułów
// zależności mogą się duplikować w wielu modułach, zapewniamy sobie samowystarczalność modułów
// nodemon zapewnia komendę w systemie (jest folder cli); są też pakiety z -cli w nazwie
// nodemon app2.js
// rs - restart w trakcie działania nodemon
// nodemon automatycznie nasłuchuje zmian w folderze aplikacji i restartuje node, jeśli takie wystąpią
// zmiany w html nie są uwzględniane (html nie jest konwertowany do kodu maszynowego)
