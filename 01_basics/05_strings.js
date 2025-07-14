const name = "himanshu"
const repoCount = 50

//console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('himanshuuu-nn-aa')

console.log(gameName[0]);  //h
console.log(gameName.__proto__); // {}
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0, 4) //basically substring de degha starting kaha se aur ending kaha tak ka
console.log(newString);  //hima

const anotherString = gameName.slice(-8, 4)  //negative dene par reverse se start hogha ye bhi substring hi degha
console.log(anotherString);

const newStringOne = "     hiamshu     "
console.log(newStringOne);   //isme space bhi degha 
console.log(newStringOne.trim()); //isme space nhi degha


const url = "https://himanshu.com/himanshu%20gupta"
console.log(url.replace('%20', '-')); //ye replace kar degha uski jagah
console.log(url.includes('himanshu')); //ye check karta hai ki string include kar raha ya nhi


console.log(gameName.split('-')); //ye spilt kar degha
