const fm = require('fs')

console.log("This is the first line")

fm.readFile('File.txt', (err, data)=>{
    if(err){
        console.log("Data can't be able to retrieve successfully")
    }else{
        console.log(data.toString('utf8'))
        fm.readFile('File2.txt', (err, data)=>{
            if(err){
                console.log("File2 data has not been executed successfully")
            }else{
                console.log(data.toString('utf8'))
            }
        })
    }
})

// Here we have made the Aysnchronous code to work synchronously. we put function 2 inside of function 1 to ensure that it  will run only in the case if first function call exexuted successfully.

// We have to actually define callbacks seperately using regular function not arrow functions. Then it would be more clear to see how it works. We can do something like...

// fm.readFile('File2.txt' , callback2) and the define callback2 as a regular function as ..

// function callback2(err, data){
//     if(err){
//         console.log("Data can't be read successfully")
//     }else{
//         console.log(data)
//     }
// }

//  and then we put fm.readFile('File2.txt', callback2) inside another function.
// Both the ways work same.  

console.log("This is second line")