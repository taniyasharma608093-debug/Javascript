// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 <= 1)
// console.log(2 == 1)
// console.log(2 != 1)

console.log("2" > 1)
console.log("02" > 1)
//not a good practice

console.log(null > 0)    //f
console.log(null == 0)   //f
console.log(null >= 0)   //t
//The reason is that an equality check == and comparisons > < >= <= works differently. 
//Comparison convert null to a number,treating it as 0. That's why null>=0 is true and null >0 is false.

console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined < 0)

//strict check ===
console.log("2" === 2)    //checks datatypes too