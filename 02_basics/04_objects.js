//const tinderUser = new Object(); //singleton obj

// console.log(tinderUser); // ye {} degha

const tinderUser = {} // ye bhi {} yahi degha

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser); //ye saare print kar degha

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "himanshu",
            lastname: "gupta"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname); // himanshu

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

//const obj3 = {obj1, obj2}
//console.log(obj3); //ye array jaise hi merge karegha  obj ke andar obj

// const obj3 = Object.assign({}, obj1, obj2)   //this is the correct way to merge the obj
// console.log(obj3);  //ye proper ans degha

// const obj3 = {...obj1, ...obj2} //ye jada use karenghe
// console.log(obj3)  //ye bhi upper wala hi ans degha

const users = [
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 1,
        email : "h@gmail.com"
    }
]

// users[1].email

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true


const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "himanshu"
}

//course.courseInstructor

// const {courseInstructor} = course

// console.log(courseInstructor); ///ye himanshu print kar degha

const {courseInstructor : Instructor} = course
console.log(Instructor); //ye bhi himashu hi print karegha



//jason api
// {
//     "name" : "himanshu",
//     "coursename" : "js in hindi",
//     "price" : "free"
// }


[
    {},
    {},
    {}
]