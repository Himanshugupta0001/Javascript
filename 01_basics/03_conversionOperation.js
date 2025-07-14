let score = "33abc"

// console.log(typeof score);
// console.log(typeof (score)); //same hi hai upar wale ki tarah


let valueInNumner = Number(score);
// console.log(typeof valueInNumner); //Number
// console.log(valueInNumner);    //NaN degha

//agar score ki value null hai to wo number 0 degha
//agar score ki value undefined hai to number NaN degha

//33 => 33
//33abc => NaN
//true => 1, false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);   //ye true degha

//1 => true; 0 =>false
//" " => false
//"himanshu" =>  true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);    //33 degha
// console.log(typeof stringNumber);   //string degha

//*****************Operations****************/
let value = 3
let negValue = -value
console.log(negValue);  //-3

// console.log(2+2); //4
// console.log(2-2); //0 
// console.log(2*2);  //4
// console.log(2**2); //2 power 2 
// console.log(2/2);
// console.log(2%2);

let str1 = "himanshu"
let str2 = "gupta"

let str3 = str1 + str2
console.log(str3); // himanshu gupta

console.log("1" + 2);   // 12
console.log(1 + "2");   // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32

console.log(true); // true
console.log(+true); // 1
//console.log(true+); //ye error de degha
console.log(+""); // 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2


let gameCounter = 100
gameCounter++;
console.log(gameCounter); //101


