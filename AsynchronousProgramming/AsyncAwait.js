
// If promise resolves then "then" block will run. If it rejects, then "catch" blog will run. Check the behaviour of code below.

function placeOrder(drink){
    return new Promise((resolve, reject)=>{
        if(drink=="coffee"){
            resolve("Order is being received")
        }else{
            reject("Your drink is not available")
        }
    })
}

function processOrder(order){
    return new Promise((resolve)=>{
        console.log(`${order} and is in processing. Please wait some time`)
        setTimeout(() => {
            resolve("order is being served")
        }, 2000);
    })
}


// placeOrder("coffee").then((msg)=>{
//     console.log(msg)
//     let orderisprossed = processOrder(msg)
//     return orderisprossed;

// }).then((orderprocessed)=>{
//     console.log(orderprocessed)
// }).catch((err)=>{
//     console.log(err)
// })

// Here promises are being chained. One Promise is calling a function that returns another promise. So we handle them using chaining. This is an example of promises chaining.

// Getting rid from the Promises Chaining and handling multiple "then" blocks, we use another method provided by javascript which is asyncAwait. 

async function serveOrder(){
    try {
        let orderplaced = await placeOrder("tea")
        console.log(orderplaced)
        let isserve= await processOrder(orderplaced)
        console.log(isserve)
    } catch (error) {
        console.log(error)
    }
}

serveOrder()

// That's how asyncAwait works