// object literals
const mySym=Symbol("key1");

const JSuser={
    name:"Rohit",
    "full name": "rohit yadav",
    [mySym]:"mykeys",
    age: 21,
    location:"lucknow",
    email:"rohit202824@gmail.com",

}
console.log(JSuser.email);
console.log(JSuser["email"]);
console.log(JSuser["full name"]);
console.log(typeof JSuser.mySym);

// Object.freeze(JSuser);
JSuser.email="rohitdevil5488@gmail.com";
console.log(JSuser);

JSuser.greeting= function(){
    console.log("Hello JS user");
}
JSuser.greetingTwo=function(){
    console.log(`hello jS user, ${this.email}`);
}
console.log(JSuser.greeting());
console.log(JSuser.greetingTwo());

// lecture17

// const tinderUser=new Object();
const tinderUser={};
tinderUser.id="123abc";
tinderUser.name="Sammy";
tinderUser.isLoggedIn=false;
console.log(tinderUser);

const regularUser={
    email:"some@gmial.com",
    fullname:{
        userfullname:{
            firstname: "rohit",
            lastname: "yadav"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

const obj1={1: "a",2: "b"}
const obj2={3: "a",4: "b"}
const obj4={5: "a",6: "b"}
// const obj3={obj1,obj2};
const obj3=Object.assign({},obj1,obj2,obj4) // imp
// in above the empty array stores the others ,emplty acts as the source while others as the target
const obj5=Object.assign(obj1,obj2,obj4) 
// in above the obj1 acts as the source while others act as a target and the values get stored in the obj1
console.log(obj3);
console.log(obj5);

// important for working on the arrays from user input
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// lec 18
const course={
    coursename: "js in hindi",
    price: "999",
    courseInstructor:"hitesh",
}
// course.courseInstructor
const {courseInstructor} = course
console.log(courseInstructor);
const navbar=({company}) =>{
    
}
navbar(company="hitesh");

// {
//     "name" : "rohit",
//     "coursename" : "ji in hindi",
//     "price": "free",
// }

// [
//     {},
//     {},
//     {},
// ]

