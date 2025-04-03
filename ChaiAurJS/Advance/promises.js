const promisesOne=new Promise(function(resolve,reject){
    // do the task
    // databse calls,cryptography calls ,network calls
    setTimeout(function(){
        console.log('task is done');    
        resolve()    
    },1000)
});
promisesOne.then(function(){
    console.log("promise consumed");
    
})
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
    }, (1000))
}).then(function(){
    console.log("Async 2 resolved");
    
})
// resolve is directly connected to the then
const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Chai" ,Email: "chai@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
    // values from the promise fucntion are directly passed up to the then part
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"Rohit",password:"1234"})
        }
        else{
            reject("ERROR: Something went wrong")
        }
    },1000)
})
promiseFour.then((user)=>{
     console.log(user);
     return user.username;     
}).then((username) =>{
    console.log(username);    
}).catch(function(error){
    console.log(error);
}).finally(()=> {console.log("Promise is either resolved or rejected")
})

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"Rohit",password:"1234"})
        }
        else{
            reject("ERROR: Something went wrong")
        }
    },1000)
})

async function consumePromiseFive(){
    try {
    const response=await promiseFive
    console.log(response);    
    } catch (error) {
        console.log(error);
        
    }
}
consumePromiseFive();

// async function getAllUsers(){
//     try {
//     const response=await fetch('https://jsonplaceholder.typicode.com/users');
//     const data=await response.json()
//     console.log(data);
//     } catch (error) {
//         console.log("E: ",error);
//     }
// }
// getAllUsers()

// trying the last one using the then system
fetch('https://api.github.com/users/hiteshchoudhary').then((response) =>{
    return response.json()
})
.then((data) =>{
    console.log(data);
}).catch((error) => console.log(error))

// fetch is the exciting feature of the nodeJs 
// befire coming of the fetch people were manullay wroking with xml and xmlhttp requests
// why we used fetch in JS because browser's fetch api is highly dependent on the web Stream API and the abortcontroller 
// structure -> fetch().then().catch(error);
// a fetch() promise only rejects the network error , it doesnot reject the http errors instead a then handler checks upon it , so if it gives us the error 404 or any of thhis type it will seen bynus only in the response not in the reject
     