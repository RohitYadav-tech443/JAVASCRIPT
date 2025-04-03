const employee = {
    calctax(){
        console.log("tax rate is 10%");
    },
};

const karanArjun={
    salary:50000,
};

karanArjun.__proto__=employee;

//creating the use if the objects and classes uses
class ToyotaCar{
    constructor(brand){
        console.log("Creating new Object ");
        this.brand=brand;
    }
    start()
    {
        console.log("start");
    }
    stop()
    {
        console.log("stop");
    }
    setBrand(brand)
    {
        this.brandName=brand;
    }
}

let fortuner=new ToyotaCar("Fortuner"); // constructor invoked
 
class Person{
    constructor(){
        this.species="homo sapiens";
    }
    eat(){
        console.log("eat");

    }
    sleep()
    {
        console.log("sleep");
    }
}
class Engineer extends Person{
    constructor(branch){
        super();// to invoke the class construcutor form the other class
        this.branch=branch;
    }
    work(){   
    console.log("solve problems ,buuild something");
  }
}
let shradhaObj =new Engineer();

//practice -1
let DATA="secret folder";
class user{
    constructor(name,email)
    {
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log("Data",DATA);
    }
}
// super keyword is used to use the constructor which is made in the other class
class Admin extends user{
    constructor(name,email)
    {
        super(name,email);
    }
     editData(){
        DATA="Some new value";
     }
}

let student1=new user("Shradha","abcd@gmail.com");
let student2=new user ("aman","aman1234@gmail.com");

let admin1=new Admin("admin","admin12w@gmail.com");


