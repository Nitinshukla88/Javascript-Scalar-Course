class Male{

    Tellgender(){
        console.log("My gender is Male")
    }
}

class Female{

    Tellgender(){
        console.log("My gender is female")
    }
}

class Trans{

    Tellgender(){
        console.log("I have no gender")
    }
}

let obj1= new Male()

let obj2= new Female()

let obj3= new Trans()

obj1.Tellgender()

obj2.Tellgender()

obj3.Tellgender()

// Conclusion: Here for all the three classes Tellgender method is same by name but when it is being called it got overriden and shows differnt forms or behaviour.

// Note: Constructor function can only be invoked using "new" keyword so don't forget to include it while making object from any class.