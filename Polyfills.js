// Polyfills are like our own implementation of any function or method in javascript.

// Polyfill for call------------------------------

let obj1 = {
    firstname: "Nitin", 
    secondname: "Shukla",
};

function printname(){
    console.log(this);
    console.log(this.firstname + " " + this.secondname);
}

printname.call(obj1);// standard call function........................

// Our polyfill- mycall()

