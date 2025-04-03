// //  if you are studying the set interval anf set timeout then don't forget to know about thhe clear interval and clear timeout 
// setTimeout(function(){
//     console.log("hitesh");
    
// },2000);
// // set interval repeats the particular given task once the given time limit of the interval hits true
// setInterval(function(){
//     console.log("Rohit");    
// },2000);
 const sayName=function(){
    console.log("Hitesh");
 }
 setTimeout(sayName,2000);
 
 const changeText=function(){
    console.log(document.querySelector('h1').innerHTML="best java Series");
 }
 const change=setTimeout(changeText,2000);
//  no matter if we declare the settimeout with the variable assigned it will still be executing without any hindrance
//  clearTimeout(change);

document.querySelector('#stop').addEventListener('click',function(){
    clearTimeout(change);
    console.log("Stopped");    
})

// intervals
const sayDate=function(str){
    console.log(str,Date.now());
}
const interval=setInterval(sayDate,1000,"hi");
// stopping
clearInterval(interval);