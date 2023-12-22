/*********  Number  ************/
// const score = 400
// console.log(score);

// const balance = new Number(500)
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// const anotherBalance = 123.8966
// console.log(anotherBalance.toPrecision(3));
// console.log(anotherBalance.toPrecision(4));

// const hundreds = 1000000
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));

console.log(Math); //object [Math]  {}
// console.log(Math.abs(-4));
// console.log(Math.abs(5));
// console.log(Math.abs(4.3));
// console.log(Math.round(5.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));

console.log(Math.random());
console.log(Math.random()*10 + 1);
console.log(Math.floor(Math.random()*10 + 1));


const min = 10
const max = 20

console.log(Math.random() * (max - min + 1) + min)

console.log(Math.floor(Math.random() * (max - min + 1) + min))


/*
[[Prototype]]: Number
constructor: ƒ Number()
toExponential: ƒ toExponential()
toFixed: ƒ toFixed()
toLocaleString: ƒ toLocaleString()
toPrecision: ƒ toPrecision()
toString: ƒ toString()
valueOf: ƒ valueOf()
[[Prototype]]: Object
[[PrimitiveValue]]: 0
[[PrimitiveValue]]: 500
*/