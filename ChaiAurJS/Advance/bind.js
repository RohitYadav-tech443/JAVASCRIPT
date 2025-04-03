//  bind is used to forcefully bind upt he thingd in the JS 
// -> it creates the new function with specified this value and optional arguments .it doesnot call the function immediately but returns the new function that can be called later.
 class React{
    constructor(){
        this.library="React";
        this.server="https://localhost:300";
        // requirement
        document.querySelector('button').addEventListener('click',this.handleClick.bind(this))
    }
    handleClick(){
        console.log("button clicked");
        console.log(this);       
    }
 }
 const app=new React();

//  IMP QUESTION-> Can we make the value of Math.pi (3.12473214) equal to the 4 or not 

const descipter=Object.getOwnPropertyDescriptor(Math,'PI')
console.log(descipter);

// console.log(Math.PI);
// console.log(Math.ceil(Math.PI));

const chai={
    name: "Ginger chai",
    price: 250,
    isAvailable:true,
    function(){
        console.log("chai nhi bani");
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,"name",{
    writable:false,
    enumerable: false,// true karne par name bhi iterable ho jaega
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (const [key,value] of Object.entries(chai)) {
    console.log(`${key}:${value}`);
}
for (const [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key}:${value}`);
    }
}

//  getters and setters 
// -> getters(get) and setter(set) allows you to define the methods in an object or class that control access to properties;they enable data encapsulation and validation.
//  it we give the same name in the constructor defnition and in getter and setter also then the infnite stack limit exceeded condiniton occurs because both constructor and getter&setter wants thier part to run agaian and again
class User{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }
    get password(){
        return `${this._password.toLowerCase()}`;
    }
    set password(value){
        this._password=value;
    }
    get email(){
        return this._email.toLowerCase();// '_'->means it becomes the private variable 
    }
    set email(value){
        this._email=value.toLowerCase();
    }
}
const hitesh=new User("Hitesh@Rohit","ASDS");
console.log(hitesh.email);
console.log(hitesh.password);

//  modern synta for the getters and setters
function User2(email,password){
    this._email=email;
    this._password=password;
    Object.defineProperty(this,'email',{
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email=value;
        }
    })
    Object.defineProperty(this,'password',{
        get:function(){
            return this._password.toUpperCase();
        },
        set: function(value){
            this._password=value;
        }
    })

}
const chini=new User2("chai@chai.com","chai");
console.log(chini.email);

// object based getter&setter
const User3 ={
    _email:'h@hc.com',
    _password:"abcd",

    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email=value;
    }
}

const tea = Object.create(User3)
console.log(tea.email);


