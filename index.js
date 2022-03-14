const { spy } = require("chai");

function receivesAFunction(callback) {  
    callback();
}

function returnsANamedFunction() {
    const Fn = () => console.log("this is a named function")
    return Fn;
}

function returnsAnAnonymousFunction() {
    return() => console.log("this is an anonymous function")
}

