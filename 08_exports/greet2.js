exports.greet = function () {
    console.log("Hello");
};

// w obu przypadkach mamy funkcję
console.log(exports);
console.log(module.exports);

console.log(exports === module.exports);
