/***  Date ****/
// let mydate= new Date()
// console.log(mydate);
// console.log(mydate.getTime())
// console.log(mydate.toDateString());
// console.log(mydate.toJSON());
// console.log(mydate.toString());
// console.log(mydate.toLocaleString());
// console.log(typeof mydate);

// let myCreatedDate = new Date(2023 , 0, 23)
// console.log(myCreatedDate);
// console.log(myCreatedDate.getFullYear(),myCreatedDate.getMonth(),myCreatedDate.getDay());
// let myCreatedDate1 = new Date(2023 , 0, 23, 5, 3)
// console.log(myCreatedDate1.toDateString());
// console.log(myCreatedDate1.toLocaleString());

//let myCreatedDate1 = new Date("01-01-2024")
// console.log(myCreatedDate1.toDateString());
// console.log(myCreatedDate1.toLocaleString());

//let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate1.getTime());

//console.log(Math.floor(Date.now()/1000));

// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());
//'${  newDate.getDay()) } and the time'

// newDate.toLocaleString('default',{
//     weekly:"long"
// })

/*      Array        */

const myArr= [0,1,23,4,54,65]
// const myHeros = ["shaktiman" , "ironman"]
// const myArr2 = new Array(1,34,4,5,6)
// console.log(myArr);
// console.log(myArr[1]);
// console.log(myHeros);
// console.log(myArr2);

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

//myArr.unshift(9)
//myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));

// const newArr = myArr.join()
// console.log(newArr);
// console.log(myArr);

//slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);

console.log("B",myArr);

const myn2 = myArr.splice(1,3)

console.log(myn1);
console.log(myn2);

//const arr1 = ["iron", "gold", "copper"]
//const arr2 = ["spiderman", "ironman", "thor"]


//arr1.push(arr2)

// console.log(arr1);        //[ 'iron', 'gold', 'copper', [ 'spiderman', 'ironman', 'thor' ] ]

// console.log(arr1[3][2]);

// const all= arr1.concat(arr2)
// console.log(all);  

//const allElement=[...arr1,...arr2]
//console.log(allElement);  
/*
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
*/
console.log(Array.isArray("Bandana"))

console.log(Array.from("bandana"));

console.log(Array.from({name: "bandana"}));     //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
