var c = 2;
{
    let a = 10;
    const b = 20;
    var c = 30;
}

// console.log(a);     //error
// console.log(b);        //error
console.log(c);        //but this will work , because var doesn't care about scope

