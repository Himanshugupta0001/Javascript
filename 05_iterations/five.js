const coding = ["js", "cpp", "python", "ruby", "java"]

// coding.forEach(function (val) {
//     console.log(val);  //print kar degha array me jo hai
// })

// coding.forEach((item) => {
//     console.log(item)
// })

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)    //print pura array ka


// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr)  //pura item then index then arr
// })


const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "python",
        languageFileName : "py"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName)
})