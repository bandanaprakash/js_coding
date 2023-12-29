//singleton
// Object.create
const telegram = new Object()
//console.log(telegram);        //{}

const telegramUser = {}

telegramUser.id = "123abc"
telegramUser.name = "Bandana"
telegramUser.isLoggedIn = false

// console.log(telegramUser);  
// console.log(Object.keys(telegramUser));  
// console.log(Object.values(telegramUser));  
//console.log(Object.entries(telegramUser));

//console.log(telegramUser.hasOwnProperty('isLoggedIn'));  //true

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullname:{
            Firstname: "Bandana",
            LastName: "Prakash"
        }
    }
}

//console.log(regularUser.fullname.userFullname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj4 = {5:"e", 6:"f"}
//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1, ...obj2,...obj4}
//console.log(obj3);

const users = [
    {
        id : '001',
        name:"John Doe"
    },
    {
        id : '002',
        name:"Bo"
    }
]
//console.log(users[0]);



// object literals
// const mySym = Symbol("key1")

// const JsUser = {
//     name:"Bandana",
//     "full name" :"Bandana Prakash",
//     [mySym]: "mykey1",
//     age:23,
//     profession:"Software engineer",
//     email: "bandana@gmail.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }
// console.log(JsUser.email);
// console.log(JsUser[mySym]);
// console.log(JsUser["full name"]);

// JsUser.email = "prakashbandana@gmail.com"
// //Object.freeze(JsUser)
// JsUser.email = "prakashbandana00@gmail.com"
//  //console.log(JsUser);

//  JsUser.greeting = function () {
//     console.log("Hello JS user");
//  }
//  JsUser.greeting2 = function () {
//     console.log(`Hello JS user, ${this.name}`);
//  }
 
//  console.log(JsUser.greeting());
//  console.log(JsUser.greeting2());

/* json */

const course = {
    coursename: "js",
    price: "999",
    courseInstructor: "Bandana"
}
const {courseInstructor: instructor} = course

console.log(instructor);

// json structure  (using for classify in JSON formatter)
/*
{
    name:"bandana",
    price:"free"
}
*/

// array {object} 
/*
[
    { },
    { },
]
*/