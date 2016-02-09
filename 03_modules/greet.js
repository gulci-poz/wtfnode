var greet = function() {
    console.log('hello');
};

//greet();

// require napotka ten fragment, mamy dostęp do module (referencja), bezpośrednio na obiekcie module wprowadzamy zmianę, która będzie potem zwrócona przez require
module.exports = greet;
