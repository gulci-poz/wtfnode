// to jest funkcjonalność ES6, a nie modułu node

import * as greeter from "greet";

greeter.greet();

// mamy koncept modułu: kod jest zakapsułkowany w module, jest chroniony, eksportujemy i udostępniamy tylko to co chcemy

// w node.js niektóre funkcje ES6 są default, niektóre dostępne z flagą --es_staging przy uruchomieniu (lub --harmony), a jeszcze inne są w trakcie tworzenia
// linux: node --v8-options | grep "in progress"
// PowerShell: node --v8-options | Select-String -pattern "in progress"

// można też spróbować --use_strict

// na razie w node.js nie ma wsparcia dla import/export z ES6

// ta funkcja nie jest jeszcze zaimplementowana w żadnej przeglądarce, jest zaimplementowana w transpilerach Traceur, Babel i Rollup

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
