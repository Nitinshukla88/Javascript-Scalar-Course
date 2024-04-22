'use strict'
// After using above line, we are restrained to use let keyword with a. We can't write a=10 and console.log(a) to get the output.

// let a=10;
// console.log(a);

console.log(this);

// "this" inside any method or function produces error.

function displayname(){
    console.log(this);
}

displayname();