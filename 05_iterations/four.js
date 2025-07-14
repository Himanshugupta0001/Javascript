const myObject = {
    js : 'javascript',
    cpp : 'C++',
    rb : 'ruby',
    swift : 'swift by apple'
}


for (const key in myObject) {
    //console.log(key);  //isme left side wala print hogha
}

for (const key in myObject) {
    //console.log(myObject[key]); //isme right side wala print hogha
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "cpp", "rb", "py", "java"]

// for (const key in programming) {
//     console.log(key)  // ye hume print karke dedegha index
// }

for (const key in programming) {
    //console.log(programming[key]) //ye hume print karke de degha naam
}


// const map = new Map()
// map.set('IN', "INDIA")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "INDIA")

// for (const key in map) {
//     console.log(key);   //maps are not iteratable through forin
// }