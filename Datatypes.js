// In Js, there are two types of datatypes- Primitive and reference datatypes

// Primitive includes - Numbers, Strings, Null, Boolean, Undefined.

// Reference Datatypes includes - Arrays, Objects, Functions.

// Concept:- In Js, Primitive Datatypes are immutable while ref are mutable. See example below.

let num= 5

let num2= num

console.log(num)
console.log(num2)

num= 2

console.log(num)
console.log(num2) // Here num will change but there will be no change reflect over num2 as they are Primitive datatypes and hence immutable.

// while

let obj1= {
    name: "Nitin", 
    age: 21
}

let obj2 = obj1

console.log(obj1)
console.log(obj2)

obj2.name= "Rajesh"

console.log(obj1)
console.log(obj2) // Here change will reflect in both of the objects as they are Reference datatypes.


// Note:- Primitive Datatypes stores in Stack Memory while Reference datatypes stores in Heap memory.