const name = "Taniya"
const repoCount = 1

console.log(name + repoCount + " Value") //not a good way

console.log(`My name is ${name}. My no. of repo's are ${repoCount}.`)     //better practice

const gameName = new String('taniya-hc-com')  //string object, same as string primitive in many ways
console.log(typeof name)
console.log(typeof gameName)

//to convert string object to string primitive , 
console.log(typeof (gameName.valueOf()));

const s1 = "2+2"
const s2 = new String("2+2")
console.log(eval(s1))      // Primitives passed to eval are treated as source code     
console.log(eval(s2))      //but string obj prints it as it is


console.log(gameName[0])
console.log(gameName[1])

console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(4))
console.log(gameName.indexOf('t'))

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(0, 4)
console.log(anotherString);

const anotherString2 = gameName.slice(-1, 4) //-ve indexing allowed
console.log(anotherString2);

const anotherString3 = "   taniya     "
console.log(anotherString3);
console.log(anotherString3.trim());

const url = "https://taniya.com/taniya%20sharma"
console.log(url.replace('%20', '-'))

console.log(url.includes('taniya'))

console.log(gameName.split('-'))