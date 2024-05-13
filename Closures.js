// Every nesteed function whether nested upto one level or more(means nested inside nested and so on) has the scope of it's whole outer environment called lexical environment. So functions in javascript forms closures.

// function fun(){
//     let value = 4

//     function nested(){
//         console.log(value)
//     }
//     return nested
// }

// let catcher = fun()

// catcher()

// for one more understanding lets nested the function as- 

function fun(){
    let value = 4

    function nested(){
        console.log(value)

        let age = 21

        function ageprinter(){
            console.log(age)
        }
        return ageprinter;
    }
    return nested
}

let catcher = fun();

let morecatch = catcher()

morecatch()

// Thats's how closures work in Js.