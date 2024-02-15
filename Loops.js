// let num=[3,4,5,6];

// let squareArray=[];

// for(let i=0;i<=num.length-1;i++){
//     // You can use both of these methods to insert element into array.
//     // squareArray.push(num[i]*num[i]);
//     squareArray[i]=num[i]*num[i];
// };

// console.log(squareArray);

// Using while loop
// let i=0;
// while(i<num.length){
//     squareArray.push(num[i]**2);
//     i++;
// }
// console.log(squareArray);

// Using for in Loop 
// for(key in num){
//     squareArray[key]=num[key]**2;
// }
// console.log(squareArray);

// We do square now using for of Loop

// for(let element of num){
//     squareArray.push(element**2);
// }
// console.log(squareArray);

// There is unique way to get element and it's respective index at the same time using for of Loop as:

// for(let [index,value] of num.entries()){
//     // console.log(index+"->"+value);
//     console.log(index,value);
// }

// For Strings also we can apply the same syntax of for of loop as

// let str="Nitin Shukla";
// for(let word of str){
//     console.log(word);
// }


let arr=[1,2,3,4,5,6,7];
let k=3;
let newarr=arr.slice(0,4)+arr.slice(4);
console.log(newarr);