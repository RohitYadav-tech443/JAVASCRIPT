// dates
let myDate=new Date();
console.log(myDate.toDateString());
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
// datatypen of date is Object
// years start from 0 in javaScript 0->january
let mycreatedDate=new Date(2023,0,23);
console.log(mycreatedDate.toDateString());
let mycreatedDate2=new Date(2023,0,23,5,3);
console.log(mycreatedDate2.toLocaleString());
let mycreatedDate3=new Date("01-14-2023");
console.log(mycreatedDate3.toLocaleString());

let myTimeStamp=Date.now();// gives time in miliseconds
console.log(myTimeStamp);
console.log(mycreatedDate.getTime());
// for time in seconds
console.log(Math.floor(Date.now()/1000));

let newDate2=new Date();
console.log(newDate2.getFullYear());
console.log(newDate2.getMonth());

newDate2.toLocaleString('default',{
    weekday: "long",
})
