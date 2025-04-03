// javascript is the Prototype-based language 
// oop is the programming with classes and object oriented
// oops gives us the clarified codes
// -Constructor and protoypes
// -classes
// instances(new,this)

// ##4 pillars 
// Abstraction 
// Encapsulation
// polymorphism
// Inheritence

const user={
    username: "Rohit",
    logicCount:9,
    signedIN: true,
    getUserDetails: function(){
        // console.log("Got user details from the Database");
        console.log(`username: ${this.username}`);
        console.log(this);
    }
}
const user2={
    username: "Rohit",
    logicCount:8,
    signedIN: true,
    getUserDetails: function(){
        // console.log("Got user details from the Database");
        console.log(`username: ${this.username}`);
        console.log(this);
    }
}
console.log(user.username);
console.log(user.getUserDetails());
console.log(this);// here we get the window's object in this context 

// this keyword is used to differentiate between 2 variables or things having the same name

// constructor->  it is special methid used to initialise the objects and is automatically invoked when the class is created.It doesn't have the any return type not even void and has the same name as the class itself

// new -> constructor function -> used to create objects dynamically 

function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    return this;
}
const userOne=new User("hitesh",12,true);
const userTwo=new User("ChaiAurCode",11,false);
console.log(userOne);
console.log(userTwo);

// here in the abpve example the new keyword prevents the User object from the overriding


