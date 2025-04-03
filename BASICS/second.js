let code=5;
let user=prompt("Enter the code to run the JS");
while(code != user)
{
    user=prompt("you entered the wrong code");

}
console.log("go ahead");
//  Arithmetic operators
let a=5;
let b=2;

console.log("a+b = ",a+b);
console.log("a-b =",a-b);
// same for div and mul
console.log("a to the power b",a**b);
// logical operators
let c=6;
let d=5;
let cond1=c>d;
let cond2= c === 5;
console.log("cond1 && cond2 =", cond1 && cond2);
console.log("cond1 || cond2 =", cond1 || cond2);
console.log("!(cond1 && cond2 =)", !(cond1 && cond2));
// conditional statements
let mode ="dark";
let color;
if(mode === "dark")
{
    color = "black";
}
else{
    color="white";
}
console.log(color);
alert("Hello Champ !!");
let name=prompt("Love Yourself");
console.log(name);
for(let i=1;i<=5;i++)
{
   console.log("Love Yourself");
} 
// sample for loop code 
let sum=0;
for(let i=1;i<=5;i++)
{
    sum=sum+i;
}
console.log("Sum=",sum);
// for-of loop
let str="JAVASCRIPT";
for( let i of str)
{
    console.log("i=",i);
}
// for-in loop
let student={
    name:"Rahul Kumar",
    age:20,
    cgpa:7.5,
    isPass:true,
}
for( let i in student){
    console.log(i);
}
