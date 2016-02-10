function Greetr() {
    this.greeting = "Hello world";
    this.greet = function () {
        console.log(this.greeting);
    };
}

// w tym przykładzie i w przykładzie z konstruktorem można stworzyć nową właściwość
module.exports = Greetr;
