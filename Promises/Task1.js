// Problem Statement: You are an E-commerce company. You have to make methods of adding things in cart after shopping, then proceed for payment, then you have to show the order summmary and also update the wallet of user.

const prompt = require('prompt-sync')({sigint: true});

let wallet_amount = 500;

// Use prompt-sync module to take input-output in node js.

const cart = []
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



// Upto here, We have created the order with order ID in database and returned the orderID. Now we have to proceed to payment.

// function for payment

function proceedTopayment(orderID){
    const pr = new Promise(function (resolve, reject){
        function isAlphaNumeric(str) {
            var code, i, len;
          
            for (i = 0, len = str.length; i < len; i++) {
              code = str.charCodeAt(i);
              if (!(code > 47 && code < 58) && // numeric (0-9)
                  !(code > 64 && code < 91) && // upper alpha (A-Z)
                  !(code > 96 && code < 123)) { // lower alpha (a-z)
                return false;
              }
            }
            return true;
          };
        if(isAlphaNumeric(orderID)){
            // console.log("Your order purchase is successful.. Thank you for shopping")
            resolve("Yes")
        }else{
            reject("There is some technical error arises.. can't place your order at the moment")
        }
    })
    return pr
}

function orderSummary(cart, string){
    const prr = new Promise(function (resolve, reject){
        if(string == "Yes"){
            console.log("Here's your order summary\n")
            let total_expenses =0
            for(i=0;i<cart.length;i++){
                console.log(`You have buyed ${cart[i]} for Rs. 10\n`)
                total_expenses+=10
            }
            console.log(`Total expenses are Rs. ${total_expenses}\n`)
            resolve(total_expenses)
        }else{
            reject("Order summary can't be generated since order is unsuccessful\n")
        }
    })
    return prr
}

function show_Wallet_amount(wallet_amount, expenses){
    const newpr = new Promise(function (resolve , reject){
        if(expenses){
            console.log(`Your current wallet balance is ${wallet_amount-expenses}\n`)
            resolve()
        }else{
            reject()
        }
    })
    return newpr
}

const pr = placeOrder(cart)
pr.then(function (orderId){
    console.log("Your order has logged succsessfully.. Order ID is ",orderId)
    console.log("\n We are now processing your payment to move furthur...")
    const p = proceedTopayment(orderId)
    return p
}).then(function(str){
    if(str == "Yes"){
        console.log("OK, your order now placed successfully.. Thank you for the shopping")
    }
    const p1 = orderSummary(cart, str)
    return p1
}).then(function (expenses){
    const new_pr = show_Wallet_amount(wallet_amount,expenses)
})