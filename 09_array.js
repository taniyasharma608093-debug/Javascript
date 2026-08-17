const arr = [0, 1, 2, 3, true, 'taniya']   //arrays are resizable in js
console.log(arr[4]);

const arr2 = new Array(1, 2, 3, 4, 5);
console.log(arr2);

arr.push(56);
console.log(arr);
arr.pop();
console.log(arr);

arr.unshift(9);
console.log(arr);

arr.shift();
console.log(arr);
arr.shift();
console.log(arr);

console.log(arr.includes(7));
console.log(arr.indexOf(3));

//array to string
const newArr = arr.join();
console.log(arr);
console.log(newArr);

//slice,splice
console.log("A ", arr);
const myn1 = arr.slice(1, 3);
console.log(myn1);
console.log("B ", arr);


console.log("A ", arr);
const myn2 = arr.splice(1, 3);
console.log(myn2);
console.log("B ", arr);
