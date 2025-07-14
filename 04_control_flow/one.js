//if

// const isUserLoggedIn = true
// const temperature = 41
// if(temperature < 50){
//     console.log("less than 50");
// }
// else{
//     console.log("temperature is greater than 50");
// }

//<, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if(score > 100){
//     let power = "fly"
//     console.log(`Use Power: ${power}`);
// }

// console.log(`Use Power: ${power}`);

const balance = 1000

// if(balance > 500) console.log("test"), console.log("test2"); //this is not good way to write code


// if(balance < 500){
//     console.log("less than 500");
// }
// else if(balance < 750){
//     console.log("less than 750");
// }
// else{
//     console.log("greater than 750");
// }

const UserLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(UserLoggedIn && debitcard && 2==2){
    console.log("Allow to buy the course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}