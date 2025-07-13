function sayMyName(){
    console.log("h");
    console.log("i");
    console.log("m");
    console.log("a");
    console.log("n");
    console.log("s");
    console.log("h");
    console.log("u");
}

//sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }


//console.log(result); //yaha par undefined degha

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 4)
//console.log("result: ",  result); // ye hume 7 degha

// function loginUserMessage(username){
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("himanshu")); // himanshu just logged in
// console.log(loginUserMessage()); //agar kuch na de to undefined de degha

// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage()); //please enter a username degha upar wale ke liye aur neeche wale ke liye undefined degha




// function loginUserMessage(username = "sam"){
//     if(username === undefined){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage()); // to ye sam print karegha aur agr neeche himasnhu de diya to himanshu ho print 


// function calculateCartPrice(...num1){
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500)); //ye array ke form me print karegha [200, 400, 500]

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

//console.log(calculateCartPrice(200, 400, 500, 2000)); // to isme val1 200 val2 400 hogha to ye [500, 2000] print karke bhje gha

const user = {
    username : "himanshu",
    price : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)
handleObject({
    username: "sam",
    price: 399
})


const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
