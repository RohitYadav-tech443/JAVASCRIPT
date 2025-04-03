
function sayMyName(){
    console.log("r");
    console.log("o");
    console.log("h");
    console.log("i");
    console.log("t");
}
sayMyName();

function addNumbers(number1,number2){
    console.log(number1+number2);
}
function addNumbers2(number1,number2){
   let result=(number1+number2);
   return result;
}
const result=addNumbers2(1,2);
console.log(result);
addNumbers(32,32);
addNumbers(3,"a");

function loginUsermessage(username){
    return `${username} just logged in`
}
console.log(loginUsermessage("hitesh"));

// for spreading the value or variable we use ...variable name 

// lec-20
 function calculateCartPrice(...num1){
    return num1;
 }
 console.log(calculateCartPrice(200,400,500));

 const user={
    username:"hitesh",
    prices:199,
 }
 function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.prices}`);
 }
 handleObject(user);