const tinderUser = new Object();      //singleton obj
// const tinderUser = {}              non-singleton obj
console.log(tinderUser);

tinderUser.id = "25U022033";
tinderUser.name = "Taniya";

// console.log(tinderUser);

const regularUser = {
    email: "taniya@123",
    fullname: {
        userfullname: {
            firstname: "Taniya",
            lastname: "Sharma"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

const obj3 = { obj1, obj2 };
console.log(obj3);            //isn't good way to combine 2 objects

// const obj4 = Object.assign(obj1, obj2);
//or
const obj4 = Object.assign({}, obj1, obj2);    //this one is used preferrably because 1st object written here is the target object and other are source objects , so this will add all the objects in an empty obj only it won't update obj1 like in 1st case
console.log(obj4);

//other way to combine objs -> spread operator
const obj5 = { ...obj1, ...obj2 };
console.log(obj5);

//when values are coming from database
const users = [
    {
        id: 1,
        email: "taniya@123"
    },
    {
        id: 1,
        email: "taniya@123"
    },
    {
        id: 1,
        email: "taniya@123"
    },
]

console.log(users[1].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));   //array inside array 

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('name'));


//de-structure
const course = {
    coursename: "Web dev - JS",
    price: "999",
    courseInstructor: "Hitesh"
}

//course.courseInstructor    what if we need to access it again n again?

const { courseInstructor } = course;
console.log(courseInstructor);

const { courseInstructor: instructor } = course;
console.log(instructor);


//JSON(javascript object notation) 
//api are json formats

// {
//     "name" : "taniya",
//     "coursename" : "JS",
//     "price" : "free"
// }

//also
/*  JSON using array
[
    {},
    {},
    {}
]
*/

//famous api -> randomuser me api
/*
{"results":[{"gender":"male","name":{"title":"Mr","first":"Andreas","last":"Christiansen"},"location":{"street":{"number":4030,"name":"Solvangsvej"},"city":"Sandved","state":"Sjælland","country":"Denmark","postcode":96585,"coordinates":{"latitude":"-46.0368","longitude":"-49.8661"},"timezone":{"offset":"-1:00","description":"Azores, Cape Verde Islands"}},"email":"andreas.christiansen@example.com","login":{"uuid":"1266cbcf-9a48-4d33-8319-36020df6f0bf","username":"beautifulmeercat324","password":"call","salt":"INtG1poH","md5":"0de8a7fbf23969e4629b2443f767b281","sha1":"ac5529230faec37c6971845a09181848964cb689","sha256":"667d256721ae87efb850dce88b5f30a978ff47e565a73e1988ff2ecd1a74467a"},"dob":{"date":"1968-10-04T21:58:17.730Z","age":57},"registered":{"date":"2003-05-07T12:40:02.603Z","age":23},"phone":"08939079","cell":"72656077","id":{"name":"CPR","value":"041068-5787"},"picture":{"large":"https://randomuser.me/api/portraits/men/13.jpg","medium":"https://randomuser.me/api/portraits/med/men/13.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/13.jpg"},"nat":"DK"}],"info":{"seed":"d7c4705bf675d1d9","results":1,"page":1,"version":"1.4"}}
*/

// yeh smjh ni aayega ,to there are tools such as JSON formatter

