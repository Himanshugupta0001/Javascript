// let a = 10
// const b = 20
// var c = 30

// console.log(a);  //10
// console.log(b);  //20
// console.log(c);  //30

// if(true){
//     let a = 10
//     const b = 20
//     var c = 30
// }
// console.log(a); //not defined
// console.log(b); //not defined
// console.log(c); //30

// let a = 300

// if(true){
//     let a = 10
//     const b = 20
//     console.log(a);  //10
// }

// console.log(a); //300



function one(){
    const username = "himanshu"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    //console.log(website);
    two()
    
}

//one()

if(true){
    const username = "himanshu"
    if(username === "himanshu"){
        const website = "youtube"
        //console.log(username + website);
    }
    //console.log(website);
}

//console.log(username);


//+++++++++++++++++++Interesting++++++++++++++++++++++++++++

addone(5)
function addone(num){ //here it will give proper ans i.e. 6
    return num + 1
}


addtwo(6)
const addtwo = function (num){  //here it will give error
    return num + 2
}

