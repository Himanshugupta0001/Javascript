// Primitive

//7 Types : String, NUmber, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false

const bigNumber = 3556454451564n;


// Reference(Non primitive)

//Array, Object, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name : "himanshu",
    age : 22
}

const myFunction = function(){
    console.log("hello World");
}

console.log(typeof myFunction); //function  
console.log(typeof heros); //object  
console.log(typeof anotherId); //symbol 


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//Stack(Primitive) isme copy milta hai ,  Heap (Non-Primitive) isme original milta hai

let myYoutubeName = "himanshudotcom"

let anotherName = myYoutubeName
anotherName = "chai"

console.log(myYoutubeName); // himanshudotcom
console.log(anotherName);   //chai

let userOne = {
    email : "user@goggle.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "himanshu@google.com"

console.log(userOne.email);  //himanshu@google.com
console.log(userTwo.email);  //himanshu@google.com




