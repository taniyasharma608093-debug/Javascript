const accountId = 144553

// let and var both used to declare variables but in var js faces scope issues like it won't understand if any scope have modified the value and it will change the original or we can say value outside that scope too , so now we use let only 

/*
Prefer not to use var
because of issue in block scope and function scope
*/
let accountEmail = "taniya@123gmail.com"
var accountPassword = "1234"
accountCity = "Kota"    //variable can be decalred this way too , because js is a safe language,but prefer not to do this
let accountState;   //semicolon not necessary

// accountId = 2         not allowed
accountEmail = "ps6080@gmail.com"
accountPassword = "dgusd"
accountCity = "Bhopal"

console.log(accountId)
console.log(accountEmail)
console.log(accountPassword)
console.log(accountCity)
console.log(accountState)

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

