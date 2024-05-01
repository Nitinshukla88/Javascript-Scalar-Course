
// setTimeout and setInterval both are aynchrounous functions.

// setInterval will run the callback after each 1 sec repeatedly for infinitely. To end it's loop, we have to use clearInterval() method.

// setInterval(() => {
//     console.log("I'm executed after 1 sec")
// }, 1000);

// To stop setInterval, we use clearInterval(ID). It take ID as parameter.

// ID is a numeric non-zero value returned by setInterval after it's running a callback in a given timeframe.

// See below  how it can be done..

// Here setInterval runs normally, counter variable is just used to store return value of setInterval..

// In browser, setInterval returns integers while in node.js, it returns bolow object:-
// timeout {
//     _idleTimeout: 1000,
//     _idlePrev: [TimersList],
//     _idleNext: [TimersList],
//     _idleStart: 40,
//     _onTimeout: [Function (anonymous)],
//     _timerArgs: undefined,
//     _repeat: 1000,
//     _destroyed: false,
//     [Symbol(refed)]: true,
//     [Symbol(kHasPrimitive)]: false,
//     [Symbol(asyncId)]: 2,
//     [Symbol(triggerId)]: 1
//   }

// Pass it to clearTimeout to comeout of loop of setInterval

let counter= setInterval(()=>{
    console.log("Hello")
}, 1000)

console.log(counter)

setTimeout(()=>{
    clearInterval(counter)
}, 4000)

// setTimeout(()=>{
//     console.log("I'm printed after 1 sec using settimeout")
// }, 1000)