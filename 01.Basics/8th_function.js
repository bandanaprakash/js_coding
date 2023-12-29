/* Function and Parameter */

function myName() {
    console.log("B");
    console.log("A");
    console.log("N");
    console.log("D");
    console.log("A");
    console.log("N");
    console.log("A");
}

// myName()
/*
function Sum(num1,num2) {
    console.log(num1 + num2);
}
 Sum(4,8)
 const result = Sum(4,8)
 console.log("Result: ", result);    //undefined
*/
 //correct form
 /*
 function Sum(num1,num2) {
    let add = num1 + num2
    return add
}
 const add = Sum(4,8)
 console.log("Result: ", add);   

 function sub(num1,num2){
    let result = num1 - num2
    return result
 }
  
 const result = sub(10,5)
 console.log("Result: ", result);
 */
/*
 function mul(num1,num2){
    return num1 * num2
    
 }
 const result = mul(10,5)
 console.log("Result: ", result);
 */
/*
 function loginUserMessage(username){
    //if(!username){}      //for_prolevel
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
 }
 console.log(loginUserMessage());

  function loginUserMessage(username = "sam"){
 
 if(username === undefined){
    console.log("Please enter a username");
    return
}
return `${username} just logged in`
}
console.log(loginUserMessage());
//sam just logged in



 console.log(loginUserMessage("Bandana"));     //Bandana just logged in

  console.log(loginUserMessage(""));  //just logged in

 console.log(loginUserMessage());  //undefined just logged in
 */
/*
 function calculateCartPrice(...num1){
    return num1
 }
 //console.log(calculateCartPrice(2));

 console.log(calculateCartPrice(200,400,600));
 
 function calculateCartPrice(val1,val2, ...num1){
    return num1
 }
 console.log(calculateCartPrice(200,400,600,7000));
 */

 const user = {
    username: "bandana",
    price:199
 }

 function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
 }

 //handleobject(user)

/*

 handleobject({
   username:"Sam",
   price:399
 })

*/

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
   return getArray[1]
}
 
//console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 400, 500, 1000]));