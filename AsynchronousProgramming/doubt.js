function print(){
    console.log("I'm the print function")
}

Promise.resolve("Yes").then((msg)=>{
    print()
    console.log(msg)
})

// Microtask Queue has the high priority than Callback or task Queue so first promises run then callbacks.