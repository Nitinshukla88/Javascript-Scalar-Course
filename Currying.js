// Currying is a new method of writing nested functions. 

// Currying can be performed with closures or bind function of javasript.



//  Infinite currying...

// function add(x){
//     return function (y){
//         return function (z){
//             return x+y+z;
//         }
//     }
// }

// console.log(add(3)(4)(3));

function add(x){
    return function (y){
        if((y)){
            return add(x+y);
        }else{
            return x;
        }
    }
}

console.log(add(3)(4)(5)(7)());

// (y) checks if y contains any value or not. By value means if it is provided with any paramter or not!