function myfunction() {
    console.log("Welcome To Apna College");
    console.log("We are learning JS");
}

myfunction();

function sum(x,y){
    s=x+y;
    return s;
}
let val=sum(3,4);
console.log(val);

const factorial=(n) =>{
    let fac=1;
    for( let i=1;i<=n;i++)
    {
        fac=fac*i;
    }
    return fac;
}
console.log(factorial(5));

const countvowel=(str) =>{
    let counter=0;
    for(const char of str)
    {
       if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char ==='u')
       {
         counter++;
       }
    }
    return counter;
}
console.log(countvowel("apnacollege"));
  
// callback function

//  
//practice
let nums=[2,3,4,5,6];
nums.forEach((num) =>{
    console.log(num*num);
});

// filter 
let arr=[1,2,3,4,5,6];
let evenArr= arr.filter((val) =>{
    return val>3;
})
console.log(evenArr);

// reduce 
let red=[1,2,3,4];
 const output =red.reduce((prev,curr) =>{
    return prev+curr;
});

console.log(output);

