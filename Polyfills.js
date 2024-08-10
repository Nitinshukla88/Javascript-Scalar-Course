// Polyfills are like our own implementation of any function or method in javascript.

// Polyfill for call------------------------------

let obj1 = {
    firstname: "Nitin", 
    secondname: "Shukla",
};

function printname(gender, city, proff){
    console.log(this.firstname + " " + this.secondname + " is a "+ gender + " and live in "+ city+ " and he is "+ proff);
}

// printname.call(obj1);// standard call function........................

// Our polyfill- mycall()


// Function.prototype.mycall = function(obj1, ...args){
//     obj1.print = this;
//     obj1.print(args[0], args[1]);
// }

// printname.mycall(obj1, "male", "kanpur"); 


// printname.apply(obj1, ["male", "kanpur"]); // standard apply function......................

// Our polyfill- myapply


// Function.prototype.myapply = function(obj1, args){
//     obj1.print = this;
//     obj1.print(...args);
// }

// printname.myapply(obj1, ["male", "kanpur"]); 


// Polyfill for bind- mybind

// let myfunc = printname.bind(obj1, "male", "city"); // standard bind function....................

// myfunc();

// Our polyfill for bind- mybind

Function.prototype.mybind = function (obj1, ...args){
    obj1.print = this;
    return function(...args2){
        obj1.print(...args, ...args2);
    }
}

let myfunc = printname.mybind(obj1, "boy", "kanpur");

myfunc("Engineer");