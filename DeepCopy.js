// To get rid from the problem of shallow copy, we make Deep copy of reference datatypes in Js as shown below.

let obj1= {
    name: "Nitin", 
    age: 21,
    address:{
        homeNo: 512, 
        city: "kanpur"
    }
}

let obj2= JSON.parse(JSON.stringify(obj1)) // Use JSON.parse and then stringigy to make deep copy in Js.

console.log(obj1)
console.log(obj2)

// Now if we make changes in obj2, lets see if it reflects in obj1 or not even in nested obj address.

obj2.address.city= "Lucknow"

console.log(obj1)
console.log(obj2)

// So it works as expected, change only reflect in obj2 not in obj1.