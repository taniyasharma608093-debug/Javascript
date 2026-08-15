/*
Primitive datatypes:
7 types: String,Number,Boolean,null,undefined,Symbol,BigInt
*/

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const BigNumber = 125452144521545n
console.log(typeof (BigNumber))

/*
Reference Type(non-primitive datatypes)
    Array,Objects,Functions

JS is dynamically typed language.which means that type checks are performed at runtime while the code executes 
*/

//array
const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Taniya",
    age: 19,
}

const MyFunction = function () {
    console.log("Hello World")
}

console.log(typeof heros)

/*
typeof -
String => string
Number => number
Boolean => boolean
null => object
undefined => undefined
Symbol => symbol
BigInt => bigint

array => object
object => object
function => function / function object
*/