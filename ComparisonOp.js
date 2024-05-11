// New we learn about Equality Comparison operator.

// In Js, there are two operators(==, ===) for comparison. Lets see how they work.

let val1= 4

let val2 = 4

console.log(val1==val2) // This will produce true.

let num1= 4

let num2 = "4"

console.log(val1==val2) // This will produce true.


// Above example shows that == only check for "value". 

let number1= 4

let number2 = 4

console.log(number1===number2) // This will produce true.

// But

let n1= 4

let n2 = "4"

console.log(n1===n2) // This will result in false.


// This shows that === perform equality comparison on both type and value of operands.


