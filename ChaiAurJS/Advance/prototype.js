// magics of the Prototype
// -> JAVASCRIPT has the prototypical behaviour mostly works on upper upper data only until it gets the value null.
// -> the new,classes and objects also this are provided by the Prototype. we can also get the prototype inside the anpther prototype
// -> everyhing in JS is the object and ends up being the null even funtion is also the object 
// -> this keyword in JS refers to the context in which a particular function is executed 
// -> the new keyword initiates the creation of the new JS object 
// -> A prototype is linked: the newly created object gets linked to the prototype property of the constructor function , this means it has the access to the properties and methods deifnes in the constructor's prototype.
// -> the constructor is called : the constructor function is called with the specified arguments  and this is bound to the newly created object. If no explicit return valse is there from the constructor then JS assumes this,newly created object ,to the inteneded return value;
function multipleBy5(num){
    return num*5;
}
multipleBy5.power =2;

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username,score){
    this.username=username;
    this.score=score;
}

createUser.prototype.increment=function(){
    this.score++;// jisne bulaya hai uske paas jao -> this(jisne) & uske(score)
}
createUser.prototype.printMe=function(){
    console.log(`price os ${this.score}`);
    
}
const chai=new createUser("chai",25);
const tea=new createUser("tea",250);

chai.printMe();
tea.printMe();

// prototype details
// try to create the new method like truelength which gets added in the prototype of the object 
let myName ="hitesh      ";


let myHeroes=["thor","spiderman"];

let heroPower={
    thor:"hammer",
    spiderman:"sling",
    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);        
    }
}
// now this object gives up the prototype of the hitesh to every function present over here
Object.prototype.hitesh=function(){
    console.log(`hitesh is present in all the obects`);    
}
heroPower.hitesh();
myHeroes.hitesh();
// this adds the method heyhitesh to the prototype methids list but is can be accessed by arrays only
Array.prototype.heyHitesh= function(){
    console.log(`hitesh says hello`);    
}
myHeroes.heyHitesh();
// heroPower.heyHitesh();

// inheritance

const user={
    name:"chai",
    email:"chai@google.com",
}
const Teacher ={
    makeVedio : true,
}

const TeachingSupport ={
    isAvailable:false,
}

// const TASupport={
//     makeAssignment:'JS assignment',
//     fullTime:true,
//     __proto__: TeachingSupport
//     // ->this makes the TAsupport to inherit the properties and methods of the Teaching Support
// }
// we can also do this implicitly outside the funcion also
// Teacher.__proto__=user;

// modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher);

let anotherUsername="ChaiAurCode    ";
String.prototype.truelength=function(){
      console.log(`${this.name}`);
      console.log(`${this}`);
      console.log(`True length is: ${this.trim().length}`);      
};
// console.log(myName.length);
myName.truelength();
anotherUsername.truelength();

// calls and this in javaScipt
// => Global Execution Context -> 

function SetUserName(username){
    // complex DB calls
    this.username=username
    console.log("Called");    
}
// call statement is used to pass the current exeution context to the another function
function createUser(username,email,password){
    SetUserName.call(this,username),
    this.email=email,
    this.password=password;
}
const coffee=new createUser("chai","chai@netflix.com","1234321");
console.log(coffee);









