// In Javascipt, every token is associated with its boolean value called truthy and falsy values.

//0, -0, false, NaN, null, undefined, empty strings('', ``, "") - These all are falsy values.

// Except these, all of the data in Js has truthy value(Any int, float, String, Array, Object etc even empty Object is truthy value).

// let val= null;

let val=[]

if(val){
    console.log("I'm a truthy value")
}else{
    console.log("I'm a falsy value")
}