
//------------------------------------------------------Call method----------------------------------------------

let obj1 = {
    firstName: "Nitin",
    lastName: "shukla",
    printName: function(){
        console.log(this.firstName + " "+ this.lastName);
    }
}

// obj1.printName();   // It'll print Nitin shukla

let obj2 = {
    firstName: "Rahul", 
    lastName: "sharma"
}

// I want to print the full name for obj2 but it doesn't have any function or method of it's own to do the same. 
// Now here we'll use call method to borrow printName function from obj1.

// obj1.printName.call(obj2); // Now it'll print Rahul sharma

function print(){
    console.log(this.firstName + " " + this.lastName);
}

// print.call(obj2); // It'll also print Rahul sharma.

// In the above example, obj1.printName is picking out function from obj1 to call over obj2. 
// Here we don't have to pick as we have already function available.
// Both the above examples are just put altogether with some modification only. They are same.

// We can also pass arguments in the call() method other than reference(obj2 here).

function print2(city){
    console.log(this.firstName + " " + this.lastName + " and he lives in" + " " + city);
}

// print2.call(obj2, "kanpur"); // Rahul sharma and he lives in kanpur. You can pass any number of arguments and handle them inside function definition.          


// ------------------------------------------------Apply method-------------------------------------------------


function print3(city, zipcode){
    console.log(this.firstName + " " + this.lastName + " and he lives in" + " " + city + " " + "with zipcode" + " "+ zipcode);
}

// print3.apply(obj2, ["kanpur", 208020]); // It'll give the desired output.

// So apply() method is the carbon copy of call() method but with a tiny change that in this method you have to pass the arguments in the form of array


//------------------------------------------------bind() method---------------------------------------------------


function print4(){
    console.log(this.firstName + " " + this.lastName);
}

let func = print.bind(obj2);

// console.log(func);

console.log(func());