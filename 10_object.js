//singleton -> when we make it via literals , it isn't singleton but when we make it via constructor ,singleton is made

//Object.create    -> singelton formation through constructor

//symbol
const mySym = Symbol("key1");

//object literal
const JsUser = {
    name: "Taniya",      //we can write 0,1,2,3,etc instead of keys
    "Full Name": "Taniya Sharma",
    mySym: "myKey1",          //if use bracket here, then it will print Symbol(key1) but if mySym is written it will only print mySym
    age: 19,
    location: "Kota",
    isLoggedIn: false
}

console.log(JsUser.name);   //to access 
console.log(JsUser["name"]);

// but for Full Name , this is used
console.log(JsUser["Full Name"]);

console.log(JsUser[mySym]);    //accessing symbol key

JsUser.location = "Bhopal";    //value of keys can be changed in an object
// Object.freeze(JsUser);         //freezing an object won't allow any changes 
JsUser.location = "Kota";      //no effect
console.log(JsUser);

//function
JsUser.greeting = function () {
    console.log("Hello JS User");
}

JsUser.greetingTwo = function () {
    console.log(`Hello JS user,${this.name}`);
}

console.log(JsUser.greeting);    //undefined when object is freezed and [Function(anonymous)] when not freezed
console.log(JsUser.greeting());  //throws an error when freezed and do work when not  

console.log(JsUser.greetingTwo());   //after every function call, ek execution apne aap hota hai , so after execution of function ,undefined will also come