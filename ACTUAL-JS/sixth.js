


// function asyncFunc(){
//   return new Promise((resolve,reject) =>{
//     setTimeout(() =>{
//         console.log("show some moves babies");
//         resolve("success");
//     },2000);
//   });
// }
// function asyncFunc3(){
//     return new Promise((resolve,reject) =>{
//         setTimeout(() =>{
//             console.log("show me your skills");
//             resolve("failure");
//         },4000);
//     });
// }

// // joining these two funtions to make one dependent on others
// console.log("fetching your skills");
// asyncFunc().then((res) =>{
//     console.log("fetching the inside data");
//     asyncFunc3().then((res)=>{
//         console.log(res);
//     });
// });

// console.log("Fetching the bold moves");
// let f1=asyncFunc();
// f1.then((res) =>{
//     console.log("fuck me daddy");
//     console.log(res);
// });

// console.log("Fetching your skills");
// let f3=asyncFunc3();
// f3.then((res) =>{

//     console.log("you are hired");
//     console.log(res);
// });




// function asyncFunc(){
//     return new Promise((resolve,reject) =>{
//         setTimeout(() => {
//             console.log("some data1");
//             resolve("success");
//         },2000);
//     });
// }

// function asyncFunc2(){
//     return new Promise((resolve,reject) =>{
//         setTimeout(() => {
//             console.log("some data2");
//             resolve("success");
//         },5000);
//     })
// }

// giving the data differently means one data printing doesn't depend upon other
// console.log("fetching data1....");
// let p1=asyncFunc();
// p1.then((res) =>{
//     console.log(res); 
// });

// console.log("fetching data2....");
// let p2=asyncFunc2();
// p2.then((res) =>{
//     console.log(res);
// });

//now making the data 2 fetching dependable upon the data1 promise // more over like the call back hell
// console.log("fetching data");
// asyncFunc().then((res) => {
//     console.log("fetching data2");
//     asyncFunc2().then((res) => {
//         console.log(res);
//     })
// })

// function hello(){
//     console.log("hello");
// }

// setTimeout(hello,2000);
// console.log("one");
// console.log("two");

// setTimeout(() => {
//     console.log("hello");
// },2000); // timeout

// console.log("three");
// console.log("four");

// // callback practice
// function sum(a,b){
//     console.log(a+b);
// }
// function calci(a,b,sumcalci){
//     sumcalci(a,b);
// }
// calci(3,4,sum);
// // creating the call back hell
// function getData(dataId,getnextData){
//     setTimeout(()=>{
//         console.log("data",dataId);
//         if(getnextData){
//             getnextData();
//         }
//     },2000);
// }
// getData(1,() =>{
//     getData(2,()=>{
//         getData(3,() =>{
//             getData(4);
//         });
//     });
// });


 // callbacks
//  function sum(a,b){
//     console.log(a+b);
//  }

//  function calculator(a,b, sumCallback){
//     sumCallback(a,b);
//  }
//  calculator(1,2, sum);

// //  callback-hell
// function getData(dataId,getnextData){
//     //2s
//     setTimeout(() =>{
//         console.log("data",dataId);
//         if(getnextData){
//             getnextData();
//         }
//     },2000);
// }

// getData(1,() =>{
//     getData(2,() =>{
//         getData(3,() =>{
//             getData(4);
//         })
//     });
// });

// promise practice 
let promises=new Promise((resolve,reject)=>{
    console.log("I am a Problem");
    resolve(12345);
})

function getDatacopy(dataId,getnextData){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
            if(getnextData){
                getnextData();
            }
        },6000);
    })
}
// promise chain making
getDatacopy(1,()=>{
    getDatacopy(2,()=>{
        getDatacopy(3,() =>{
            getDatacopy(4);
        });
    });
});

const getpromises=() =>{
    return new Promise((resolve,reject)=>{
        console.log("I am a problem");
        resolve("success");
    });
}
promises.then((res) =>{
    console.log("promise fulfilled",res);
});
promises.then((err) =>{
    console.log("rejected",err);
});
// // promises handling
// let promise= new Promise((resolve,reject) =>{
//     console.log("I am a promise");
//     resolve(123);
// });

// function getData(dataid,getnextData){
//     return new Promise((resolve,reject)=> {
//       setTimeout(() =>{
//         console.log("data",dataid);
//         resolve("success - work hard but for the success");
//         if(getnextData){
//             getnextData();
//         }
//       },5000);
//     })
// }

// // promise chain making
// getData(1).then((res) =>{
//     console.log(res);
//     getData(2).then((res) =>{
//         console.log(res);
//         getData(3).then((res) =>{
//             console.log(res);
//         })
//     })
// })


const getpromise=() =>{
    return new Promise ((resolve,reject) =>{
        console.log("I am a proimse");
        resolve("success");

    })
}


promises.then((res) =>{
    console.log("promise  fulfilled",res);
})
promises.catch((err) =>{
    console.log("rejected",err);
})

function api(){
    return new Promise((resolve,reject) =>{
     setTimeout(() => {
        console.log("weather datta");
        resolve(200);
     },2000);
    });
}

async function getWeatherData(){
    await api();// 1st call
    await api();//2nd call
}

function getData(dataId){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            console.log("data",dataId);
            resolve("success");
        },2000);
    })
 }