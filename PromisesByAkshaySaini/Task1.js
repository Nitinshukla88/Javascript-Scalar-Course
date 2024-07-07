// Problem Statement: You are an E-commerce company. You have to make methods of adding things in cart after shopping, then proceed for payment, then you have to show the order summmary and also update the wallet of user.

const prompt = require('prompt-sync')({sigint: true});

// Use prompt-sync module to take input-output in node js.

const cart = ["kurta", "pajama", "jeans"]
const items_to_buy = {
    1: "Kurta",
    2: "Payjama",
    3: "Jeans",
}

let shopping = 'y'

console.log("We have these items to buy....\n\n",items_to_buy)

console.log("\nPress corresponding numbers to buy that item")


while(shopping=='y'){
    let user_inp = prompt("\nEnter the number to buy from items in the store ")
    if(Number(user_inp)==1){
        cart.push(items_to_buy[1])
    }else if(Number(user_inp)==2){
        cart.push(items_to_buy[2])
    }else{
        cart.push(items_to_buy[3])
    }
    let user_wish = prompt("Do you want to do more shopping? ")
    if(user_wish == 'y'){
        continue
    }else{
        shopping = 'n'
    }
}

function placeOrder(cart){
    const promise = new Promise(function(resolve, reject){
        if(cart.length==0){
            reject("Cart is empty....Please enter items to proceed furthur.")
        }else{
            const Id = "23x45ghnqw1"
            resolve(Id)
        }
    });
    return promise;
}

const pr = placeOrder(cart)
pr.then(function (orderId){
    console.log("Your order has been placed succsessfully.. Order ID is ",orderId)
})

