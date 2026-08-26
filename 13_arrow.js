const user = {
    username: "taniya",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage();
user.username = "Sam";
user.welcomeMessage();

console.log(this);       //empty obj 

// function chai() {
//     console.log(this);   //so many values will appear
//     let username = "taniya";
//     console.log(this.username);  //undefined , it works only in objects and not in functions
// }

// chai();

const chai = () => {         //arrow function
    console.log(this);       //{} and not any value
    let username = "taniya";
    console.log(this.username);
}

chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2;               basic arrow function
// }
// const addTwo = (num1, num2) => num1 + num2;  //implicit return
// const addTwo = (num1, num2) => (num1 + num2);

// const addTwo = (num1, num2) => { username: "taniya" };    //undefined because we used {} and there is no return
const addTwo = (num1, num2) => ({ username: "taniya" });    //will return whatever written inside ()


console.log(addTwo(3, 4));


