//  when we run the code on the vs code on VS code using the 
//  node then the variabke scope is global and when we run it on the
// chrome browrse them the global scope of the variable changes 

// function one(){
//     const username="hitesh"
//     function two(){
//         const website="youtube"
//         console.log(username);
//     }
//     console.log(website);
//     two();
// }
// one();

if(true){
    const username="hitesh"
    if(username === "hitesh"){
        const website="youtube"
        console.log(username+website);
    }
    console.log();  
}
// console.log(username);

// ++++++++++++++++Interesting++++++++++++++
function addone(num){
    return num+1
}
console.log(addone(5));
// hoisitng:- addTwo(5);
// hoisting :- its ajavascipt mechanism where variable and function declarations are moved to top of their scope before code execution 
// means you are trying to use the funtion before their declaration int he code
const addTwo= function(num){
    return num+2
}

// lecture 23
const user={
    username:"hitesh",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to web`);
        console.log(this);
    }
}
 
// user.welcomeMessage();
// user.username="sam"
// user.welcomeMessage();
console.log(this); // on sepearte compiler other than the chrome it gives output as the {} while in browser it gives windows as the default answer

// function chai(){
//     let username="rohit";
//     console.log(this.username);
// }
// chai()
// this works only with the objects not with the funtions or inside it 
// arrow Function
const chai=() =>{
    let username="hitesh"
    console.log(this);
}
chai();

const add2=(num1,num2) =>{
    return num1+num2;
}

const sub2=(num1,num2) => (num1-num2)
console.log(sub2(4,3));
console.log(add2(3,4));

// lecture 24

// Immediately Invoked Function Expression (IIFE)
(function chai(){
    console.log(`DB connected`);
})();
// we use iife to prtect the funtion from being polluted by the global variables 
// syntax of the iife (funtion here)(argument here)

// arrow iife
((code) =>{
    console.log(`DB conntected 2 ${code}`);
})(`rohit`);

// if we are writing the 2 iife in the code then we need to sepearte them with the semicolo ';'

