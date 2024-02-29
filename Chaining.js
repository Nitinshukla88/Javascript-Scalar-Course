// Chaining is used to write multiple function or more than one operations in single line.

let arroftranscations=[234,567,865,344,-231,908,-220];

// I want to add only those numbers which are postive because only those are valid transcations

let func=arroftranscations.filter((x)=>{
    if(x>0){
        return x;
    }
}).reduce((ans,val)=>{
    ans=ans+val;
    return ans;
})
console.log(func);