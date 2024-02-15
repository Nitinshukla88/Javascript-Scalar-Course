// Creating an object as a record of student Data.
// let obj={
//     Name:"Nitin Shukla",
//     Standard:"B.Tech",
//     Age:21,
//     isEmployed:false
// };
// console.log(obj);

// console.log(obj["Name"]);
// console.log(obj.Name);

// console.log(obj["Age"]);
// console.log(obj.Age);


// Now we will create an object containing my details.

let myself={
    Name:"Nitin Shukla",
    Age:21,
    Gender:"Male",
    Myfriends:["Abhay","Nishant"],
    Myaddress:{
        HomeNo:"S.f 512",
        Town:"Panki",
        City:{
            CityName:"Kanpur",
            Pincode:208020
        },
        State:"Uttar Pradesh"
    }
};

// console.log(myself);

// console.log(myself.Myfriends[0]);

// console.log(myself.Myaddress.City.CityName);


// Now we will make changes in our original Object.

// myself.Myaddress.City.CityName="Lucknow";
// console.log(myself.Myaddress.City.CityName);

// myself.Myfriends[1]="Shailendra";
// console.log(myself.Myfriends[1]);



// I can add key value pairs even after the creation of object from outside the object using code.

myself.Goal="Software Engineer";
// console.log(myself);

// For deletion 
delete myself.Myaddress;
console.log(myself);