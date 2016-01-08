// szybki sposób na zbudowanie obiektu, za pomocą literału
var person = {
    firstname: 'Sebastian',
    lastname: 'Gulczynski',
    greet: function() {
        console.log('hello, ' + this.firstname + ' ' + this.lastname);
    }
};

person.greet();

// inny sposób na dostanie się do właściwości obiektu
console.log(person['firstname']);