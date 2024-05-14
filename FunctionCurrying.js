// Well Currying is the use case of Closures in Javascript. With currying, instead of passing multiple arguments, we can pass them in pieces as shown below----

function sum(x, y){
    console.log(x+y)
}

sum(2,4)

// Typical normal function. Now we use curried function to do the same task.

function sum(x){
    return function sum2(y){
        console.log(x+y)
    }
}

let ans= sum(2)

ans(4)

// This is the application of Closures and this method of function in which we can pass arguments in pieces is called function currying.