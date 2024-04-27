let obj1={
    Name: "Nitin Shukla",
    Age: 22,
    Address: "Panki Kanpur",

    // Here if you make arrow function, then it will not work. It doesn't point to object.
    // printdetails:function(){
    //     console.log("This is using regular function")
    //     console.log(`My name is ${this.Name} and My age is ${this.Age}`)
    // }
    // Output: My name is Nitin Shukla and My age is 22

    // This is using Arrow function.

    // printdetails:function(){
    //     console.log(`My name is ${this.Name} and My age is ${this.Age}`)
    // }
    // Output : My name is undefinde and My age is undefined. Therefore arrow function are not suitable for using inside Objects with "this" Keyword. 
}

let obj2={
    Name: "Rajat Shukla",
    Age:"25",
    Address: "Sundar Nagar Panki Kanpur"
}

// This call method helps to maintain DRY Principle.
// obj1.printdetails.call(obj2)

// We can also make "printdetails" function as Global and then call it with some object. We can also pass parameters with call method as follows:-

// let printdetails=function(){
//     console.log(`My name is ${this.Name} and My age is ${this.Age}`)
// }
// Now printdetails is global. 

// printdetails.call(obj1)

// printdetails.call(obj2)

// We can also pass arguments inside it as:-

let printdetails=function(city , gender){
    console.log(`My name is ${this.Name} and My age is ${this.Age} and My city is ${city} and My gender is ${gender}`)
}

// printdetails.call(obj1, "kanpur", "M")

// Let's talk about 'Apply Method is Js'

// There is only one difference in between call and apply methods which is:-

// For 'Apply method, you need to pass the argument within an array as follows-'

// printdetails.apply(obj1, ["Kanpur", "Male"])


// That's why order is important...
// printdetails.apply(obj1, ["Male", "Kanpur"])

// Javascript provides another keyword for storing or binding a function inside a variable which takes arguments. When you call the variable, it will invoke the stored function inside it as below:-

let mystorer=printdetails.bind(obj2, "Lucknow", "M")

mystorer()