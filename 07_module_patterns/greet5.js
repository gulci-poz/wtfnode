var greeting = "Hello world";

function greet() {
    console.log(greeting);
}

// eksponujemy obiekt i tam wyliczamy zmienne i funkcje, które chcemy eksportować
// w ten sposób możemy ukryć właściwości i metody z modułu
// robiliśmy podobnie deklarując zmienne poza prototypem
// Revealing Module Pattern
module.exports = {
    greet: greet
};
