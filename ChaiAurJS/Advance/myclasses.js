class user{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }
    encryptPassword(){
        return `${this.password}abc`;
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const chai=new user("chai","chai@gmial.com","1234");
console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// behind the scene
function User(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
}
User.prototype.encryptPassword=function(){
    return `${this.password}abc`;
}
User.prototype.changeUsername=function(){
    return `${this.username.toUpperCase()}`;
}
const tea=new User("chai","chai@gmial.com","1234")
console.log(tea.encryptPassword());
console.log(tea.changeUsername());

class User2{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);        
    }
}

class Teacher extends User2{
    constructor(username,email,password){
        super(username)// it makes directly the this call to the User2 and take the usernmae input form there just like earlier done using long syntax
        this.email=email;
        this.password=password;
    }
    addCourses(){
        console.log(`A new Course awas added by ${this.username}`);        
    }
}

const chini=new Teacher("chai","chai @yahoo.com","12398");
console.log(chini);
chini.logMe()
const masalaChai=new User2("masalaChai");

masalaChai.logMe()
console.log(chini === masalaChai);
console.log(chini instanceof Teacher);
console.log(Teacher instanceof User2);

// static properties
class Rohit{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`username: ${this.username}`);
    }
    // static here prevents the other function to access this createId
    // static-> it is used to define that the method or properties belong to class itself rather than the instance of the classes.
    static createId(){
        return `123`;
    }
}
const hitesh=new Rohit("hitesh")
// console.log(hitesh.createId())
class Tihor extends Rohit{
    constructor(username,email){
        super(username);
        this.email=email;
    }
}

const Iphone=new Tihor("iPHone","i@phone.com");
console.log(Iphone);




