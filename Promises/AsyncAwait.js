// Here we'll see how async await works and what's the thing that is known as suspension of function?

const p1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("p1 promise got resolved");
    }, 5000);
});

const p2 = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve("p2 promise got resolved");
    }, 8000);
});

const p3 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("p3 promise got resolved");
    }, 12000);
});

async function head(p1,p2){
    console.log("I'm written above await");
    const res = await p1;
    console.log(res);
    console.log("I'm written after await inside async function head");

    console.log("I'm end of p1 and just before of p2");
    const resp2 = await p2;
    console.log(resp2);
    console.log("I'm after p2");

    const resp3 = await p3;
    console.log(resp3)
}
head(p1, p2);
console.log("I'm outside async function head");