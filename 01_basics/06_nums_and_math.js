const score = 400
//console.log(score); //400 degha


const balance = new Number(100)
// console.log(balance);  //[Number: 100] degha

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); //precise ke liye hai andar number jitna denghe utne tak wo . ke baad tak ka ans degha

const otherNumber = 23.6596

// console.log(otherNumber.toPrecision(3)); // ye round off kar degha jitna denghe

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN')); //ye commas laga dete hai
 

// ++++++++++++++++++++Maths+++++++++++++++++++//
// console.log(Math);
// console.log(Math.abs(-4)); // 4
// console.log(Math.round(4.6)); //5
// console.log(Math.ceil(4.2)); //5
// console.log(Math.floor(4.9)); //4
// console.log(Math.min(4, 3, 6, 8)); //3
// console.log(Math.max(4, 3, 6, 8)); //8


console.log(Math.random());   //iski hamesa value 0-1 me hi aayeghi
console.log((Math.random()*10) + 1); 
console.log((Math.random()*10) + 1); 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
