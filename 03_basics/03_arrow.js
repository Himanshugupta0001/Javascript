const user = {
    username : "himanshu",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);   // ye {} print karegha

// function chai(){
//     let username = "himanshu"
//     console.log(this.username); //ye undefined degha function ke andar this use kar rahe hai isilie
// }

// chai()

// const chai = function(){
//     let username = "himanshu"
//     console.log(this.username) // ye bhi undefined hi degha
// }
// chai()


// const chai = () => {
//     let username = "himanshu"
//     console.log(this.username) // ye bhi undefined hi degha
// }
// chai()

const chai = () => {
    let username = "himanshu"
    console.log(this) // ye {} degha
}
//chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3, 4));  // ye 7 degha


// const addTwo = (num1, num2) =>  num1 + num2
// console.log(addTwo(3, 4)); //ye bhi 7 de degha

// const addTwo = (num1, num2) =>  (num1 + num2)
// console.log(addTwo(3, 4)); //ye bhi 7 de degha

const addTwo = (num1, num2) =>  ({username: "himanshu"})
console.log(addTwo(3, 4));  //ye {username: "himanshu"} degha