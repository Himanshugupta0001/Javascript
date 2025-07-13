//Singlton   //jab bhi koi constructor se banate hai singleton object banta hai
//object.create

//object literals
const mySym = Symbol("key1")

const JsUser = {
    name : "himanshu",
    "fullname" : "himanshu gupta",
    [mySym] : "myKey1",
    age : 18,
    location : "jaipur",
    email : "himanshu@goole.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["fullname"]);
// console.log(JsUser[mySym]);


JsUser.email = "himanshu@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "himanshu@microsoft.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS User"); 
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`); 
}

console.log(JsUser.greeting); //it will give [Function(anonymous)]
console.log(JsUser.greeting()); // Hello JS User

console.log(JsUser.greetingTwo()); // Hello JS User, himanshu

