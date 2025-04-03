"use strict"; // treats all the Js Code as the new version
// alert("hello");   
const accountId=14453
let accountEmail="rohit23458@gmail.com";
let accountpassword="123654";
let accountcity ="Lucknow";

console.table([accountId, accountEmail,accountpassword,accountcity]); 

let value=3;  
let negValue=-value;
console.log(negValue);
console.log("1"+2);
console.log(1+"2");
console.log(1+2+"2");
console.log("1"+2+2);

// console.log(null>0)
// console.log(null==0);
// console.log(null>=0);
// console.log(undefined ==0);
// console.log(undefined >=0);
// console.log(undefined >0);
// avoid using these types of statements in js

// Strings
const gameName=new String ('hitesh-hc');
const newString=gameName.substring(0,4);
console.log(newString);
const anotherString=gameName.slice(-8,4); // for reverse slicing the string we use the negative indexing
console.log(anotherString);

const newStringOne="     hitesh     ";
console.log(newStringOne);
console.log(newStringOne.trim());
const url="https://hitesh.com.hitesh%20choudhary";
console.log(url.replace('%20','-'));
console.log(url.includes('Rohit'));
console.log(url.includes('hitesh'));
console.log(url.split('.'));

// lecture 12
const score=400;
console.log(score);
const balance =new Number(100);
console.log(balance);
console.log(balance.toString());
console.log(balance.toFixed(2));
// gives us the fixed value after decimal upto 2 digits mianly used in gst type calculations
const otherNum=23.8663;
console.log(otherNum.toPrecision(3));
const hundreds=10000000;
console.log(hundreds.toLocaleString('en-IN'));
// this is used to convert the big zero values to the comas breaks so that they can be preciously seen
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.6));
console.log(Math.min(4,3,5,2));

// when using the random function we want generate the randoms between the given limits
const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min);

