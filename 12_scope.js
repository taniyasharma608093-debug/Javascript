
if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
}

// console.log(a);     //error
// console.log(b);        //error
console.log(c);        //but this will work , because var doesn't care about scope

function one() {
    const username = "taniya";

    function two() {
        const website = "youtube";
        console.log(username);
    }

    // console.log(website);
    two();
}

one();

if (true) {
    const username = "taniya";
    if (username == "taniya") {
        const website = " youtube";
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

//++++++++++++++INTERESTING+++++++++++++++++ hoisting

console.log(addOne(5));    //doesn't give error even if the function is declared later
function addOne(num) {     //here ,we only declared the function
    return num + 1;
}

// addTwo(5);                 //but this will produce error
const addTwo = function (num) {     //here, we declared and stored the function in a variable
    return num + 2;
}



