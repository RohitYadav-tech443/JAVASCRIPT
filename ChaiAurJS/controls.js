// JAvascript execution context
// {}-> global execution context ,for VS Code the GEC is {} and for browser its the windows
// types of execution context-> GEC,Funtion EC,Eval EC 
// lec-26

const score =200
if(score>100){
    const power="fli";
    console.log(`User power : ${power}`);
    
}
// console.log(`User power : ${power}`); \
// if we have declared this funstion as the var inside the if() then the could be made to the const varialbe after the if conditon

const balance=1000;
if(balance>500) console.log("test");

if(balance<500){
    console.log("less than 500");
}
else if(balance <750){
    console.log("balance less than 750");
}
else{
    console.log("sufficient balance");
}

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month=3;// this 3 is matched with the case number
switch(month){
    case 1:
        console.log("Janaury");
        break; 
    case 2:
        console.log("February");
        break; 
    case 3:
        console.log("March");
        break; 
        
    default :
    console.log("not found");
    break;
}
// when a case matches in the switch case then also then cases after that particular case are executed except the default case ,it's not executed
const userEmail="rohit2345@gmail.com";
if(userEmail){
    console.log("got the email");
}
else{
    console.log("don't have the email");
    }
// truthy and falsy values
// falsy-false,0,-0,BigInt 0n,"",null,undefined,NaN
// truthy-"0",'false'," ",[],{},funtion(){} = empty funtion

// Nullish Coalescing Operator(??) :null undefined
let val1;
// val1=5 ?? 10
val1=null?? 10;
console.log(val1);
// this operator acts as the safety check for the null values and undefined values if they arise during the execution
var2=undefined ?? 15;
console.log(var2);
val3=null ?? 10 ?? 15;
console.log(val3);
// this operator and the ternary operator are totally different from each other

// for loop
for(let i=0;i<5;i++){
    console.log(i);
}
// break and continue

//  while and do-while
let i=1;
while (i<6) {
    console.log("rohit");
    i=i+1;
}
let j=1;

do {
    console.log("rohit");
    j=j+1;
} while (j<6);

// for of and for in loops
const arr=[1,2,3,4,5];
for (const val of arr) {
    console.log(val);
}

const map=new Map()
map.set('IN',"India");
map.set('USA',"United States Of America");
map.set('Fra',"France");
map.set('Pak',"Pakistan");
// console.log(map);
for(const [key,value] of map){
    console.log(key, ':-' ,value);
}
//  only maps are iterable like this we can't iterate any other object or varibale like map(key value) iterator
const myObject={
    js:'javascript',
    cpp:'C++',
    rb:'ruby',
    swift:'Swift by apple',
}
// for -in loop
for(const key in myObject){
    console.log(key);
}
for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
// array also have keys like in the form of the base indexes
const programming=["js","rb","py","java"];
for(const key in programming){
    console.log(key);// this gives us keys base address
}

for(const key in programming){
    console.log(programming[key]);
}

const coding =["js","ruby","java","python","cpp"]
coding.forEach(function(item){
    // perform the task on every element
    console.log(item);
})
// for each coding syntax doesn't return any type of values
coding.forEach( (item) => {
    console.log();
})
 
const myNums=[1,2,3,4,5,6,7,8,9,10];
const newNums=myNums.filter( (num)=> 
    num>4);
console.log(newNums);
//  when we open the scope of the funtion using this {} then we need to use the return statemnet to return up the things 
//  when we don't use the {} then we don;t need thode return statements to return up the values  
const newNums2=myNums.filter( (num) =>{
    return num>6;
})
console.log(newNums2);
//  now if we want to do this same task using the for Each loop
const newNums3=[];
myNums.forEach((num) =>{
    if(num>2){
       newNums3.push(num); 
    }
})
console.log(newNums3);

const newNums4=myNums.map((num) => {
    return num+10;
})
console.log(newNums4);

// when we want to use the maps inside the maps 
const newNums5=myNums.map((num) => num*10)
                     .map((num) => num+1)
                     .filter((num) => num>=40)
console.log(newNums5);
// filter gives us output based uopn the true and false of the condition stated
//  the values from one map get passed upon the inside map funtion then the output is presented to us 

// reduce method -
// array.reduce((accumulator,currentvalue)=>(accumulator+currentvalue,initialvalue)); 
const nums=[1,2,3];
const mytotal=nums.reduce(function(acc,currVal){
    console.log(`acc: ${acc} and currVal${currVal}`);
    return acc+currVal
},2);// the value 2 is the initial accumlator
console.log(mytotal);
const nums2=[1,2,3];
const mytotal2=nums2.reduce((acc,currVal) => {
    return acc+currVal
},2);// the value 2 is the initial accumlator
console.log(mytotal2);

const shoppingCart=[
    {
        itemName:"JS course",
        price:2999
    },
    {
        itemName:"JS course",
        price:2999
    },
    {
        itemName:"java course",
        price:1999
    },
    {
        itemName:"python course",
        price:3999
    },
    {
        itemName:"Mobile course",
        price:4999
    },
]

const priceToPay=shoppingCart.reduce((acc,item) => acc+item.price,0);
console.log(priceToPay);