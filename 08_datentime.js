//Dates

let myDate = new Date();
console.log(typeof myDate)

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());

let myCreatedDate = new Date(2006, 11, 16, 5, 3);     //months indexing start from 0 not 1
console.log(myCreatedDate.toLocaleString());

let myDate2 = new Date("2023-01-14");   //yyyy-mm-dd
console.log(myDate2.toLocaleString());

let myDate3 = new Date("01-14-2023");   //mm-dd-yyyy in india
console.log(myDate3.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
//to get these in seconds
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate.getMonth() + 1);   //because month start from 0
console.log(newDate.getDay());


newDate.toLocaleString('default', {        //we can modify 
    weekday: "long"
})