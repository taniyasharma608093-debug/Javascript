function sayMyName() {
    console.log("T");
    console.log("A");
    console.log("N");
    console.log("I");
    console.log("Y");
    console.log("A");
}

sayMyName();

function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);
}

addTwoNumbers(56, 8);

const result = addTwoNumbers(5, 5);
console.log(result);    //undefined

function add(num1, num2) {
    let res = num1 + num2;
    return res;
}

const result1 = add(5, 5);
console.log("Result: ", result1);


//.................
function loginUserMessage(username) {
    if (username == undefined) {
        console.log("Please enter username!");
        return;
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage());

//..............
function calculateCartPrice(...num) {    //rest operator
    return num;
}

console.log(calculateCartPrice(200, 400, 800));      //will return an array

function xyz(val1, val2, ...num) {
    return num;
}

console.log(xyz(200, 400, 800, 1200));    //val1=200,val2=400and rest will be in num as an array

//..........
const user = {
    username: "Taniya",
    price: 199
}

function handleObject(anyobj) {
    console.log(`Username is ${anyobj.username} and price is ${anyobj.price}.`);
}

handleObject(user);
handleObject({
    username: "sam",
    price: 568
});

//.............
const arr = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    return getArray[1];
}
console.log(returnSecondValue(arr));