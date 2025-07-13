const marvel_heros = ["thor", "Ironman", "Spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros); //iske me array ke andar array ho jayegha
// console.log(marvel_heros[3][1]); // flash

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros); // ye merge array degha

const all_new_heros = [...marvel_heros, ...dc_heros]
//console.log(all_new_heros);  //ye bhi concat wala hi ans degha //spread karne wala


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // ye flat kar degha andar jitne bhi array ho
//console.log(real_another_array);

console.log(Array.isArray("himansshu")); //false
console.log(Array.from("himansshu")); //['h', 'i', 'm', 'a',  ......]

console.log(Array.from({name: "himansshu"})); //[] //ye empty degha  ////imp

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //[100, 200, 300]  //array me convert kar degha




