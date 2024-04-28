const fm = require('fs')

console.log("This is the first line")

// Ansynchronous Functions runs with callback functions. Below when File.txt has been read completely, callback runs with all the data of File.txt in data and if any error then with err as parameter in this callback function.

fm.readFile('File.txt', (err, data)=>{
    if(err){
        console.log("Data can't be able to retrieve successfully")
    }
    console.log(data.toString('utf8'))
    // if you only write "console.log(data.toString('utf8'))" if will produce buffer instead of desired data so you have to convert it into utf8 encoding to get the output.
})

console.log("This is second line")