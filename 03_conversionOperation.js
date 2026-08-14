// let score = "33"      
// let score = "33abc"   //such strings will convert to numbers(issue in JS)
// let score = null         //prints 0
// let score = undefined    //NaN
let score = true         //1 and 0 for false

console.log(typeof (score))
console.log(typeof score)

let valueInNumber = Number(score)
console.log(typeof (valueInNumber))
console.log(valueInNumber)

//"33" => 33
//"33abc" => NaN
//null => 0
//undefined => NaN
//true => 1 ; false => 0

let isLoggedIn = 6
// let isLoggedIn = "dshdj"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 or anyno. => true;0 => false
// "" => false
// "hdj" => true

let someNo = 33
let stringNumber = String(someNo)
console.log(stringNumber)
console.log(typeof stringNumber)