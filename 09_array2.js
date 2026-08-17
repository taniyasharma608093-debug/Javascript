const marvel_heros = ['thor', 'IronMan', 'SpiderMan'];
const dc_heros = ["SuperMan", "Flash", "Batman"];

// marvel_heros.push(dc_heros); array in an array 
//console.log(marvel_heros[3][1]);    to access flash but isn't a good way
console.log(marvel_heros);

const allHeros = marvel_heros.concat(dc_heros);  //concatenation
console.log(allHeros);

const allNewHeros = [...marvel_heros, ...dc_heros];  //spread operator
console.log(allNewHeros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const realAnotherArray = anotherArray.flat(Infinity);
console.log(realAnotherArray);

console.log(Array.isArray("Taniya"));
console.log(Array.from("Taniya"));
console.log(Array.from({ name: "Taniya" }))   //interesting from interview persepective

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));