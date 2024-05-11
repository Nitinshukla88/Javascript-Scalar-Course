// Now we know that reference datatypes in Js are mutable.

//If we want to get rid of this thing, we can do that simply by using spread operator(... three dots) to make shallow copy of particular data type

// Note: There is one problem with shallow copy. It only provide immutability upto one level only. If you nest object inside object or array inside array and then change properties on value of nested object or array then it will reflect to both as said earlier that it only provides this functionality upto one level of nesting.

let arr = [2,3,4,5,6]

let arr2 = [...arr] // It creates shallow copy of arr and store into arr2

console.log(arr)
console.log(arr2)

arr2[3]= 12

console.log(arr)
console.log(arr2)

// Let's see the problem 

let array = [23,12,13,[2,3,4,5],11]

let array2 = [...array]

console.log(array)
console.log(array2)

array2[3][0]= 25

console.log(array)
console.log(array2) // Shallow copy not works as we gone inside second level into nested array not made change over there. So it reflects in both the arrays. 
