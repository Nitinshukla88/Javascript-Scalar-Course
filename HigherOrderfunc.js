let arr=[1,2,3,4,-5,6];
// Find function give the first element that satisfies the condition 

// let ans=arr.find((num)=>{
//     return num%2==0;
// });
// console.log(ans);

// Findindex function will give the index of first element that satisfies the condition 

// let index=arr.findIndex((num)=>{
//     return num%2==0;
// });
// console.log(index);

// Let's talk about some method in javascript.

let ans=arr.some(function(n){
    if(n<0){
        return true;
    }
});
console.log(ans);