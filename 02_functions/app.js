// function statement
function greet() {
    console.log('hi');
}

greet();

// functions are first-class
function logGreeting(fn) {
    fn();
}

logGreeting(greet);

// function expression
// funkcja jest anonimowa, ale wyrażenie greetMe wskazuje na tę funkcję
var greetMe = function() {
    console.log('hi, gulci');
};

// to jest teraz funkcja
greetMe();
// it's first class
logGreeting(greetMe);

// use a function expression on the fly
logGreeting(function() {
    console.log('hi, anonymous');
});