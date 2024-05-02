// Promises is a commitment that has been done. 

// In javascript states of promises are:-

// 1. Pending State- that means it has not been completed yet.

// 2. Fulfilled state- that means it is completed.

// 3. Rejected state- that mesans it can't be completed.

// 4. Setteled state- state 2 and 3 comes under setteled state that means promises has been fulfilled or rejected but not pending.

// Let's create a promise.

let mypromise= new Promise((resolve, rejected)=>{
    const variable1= 4
    const variable2= 4

    setTimeout(()=>{
        if(variable1==variable2){
            resolve("The promise has been resolved");
        }else{
            rejected("The promise had been rejected");
        }
    },2000)
})

console.log(mypromise)

mypromise.then((ok)=>{
    console.log(ok)
}).catch((notok)=>{
    console.log(notok)
})


// This is the simple working of promises in javascript.

// make a promise if promise settled- if resolved then return a promise object and run "then" expression, if rejected then run catch handler.