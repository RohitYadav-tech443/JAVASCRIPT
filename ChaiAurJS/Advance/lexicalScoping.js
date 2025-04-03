// -> Closures -it is the Combinations of a function bundled togetheer (enclosed) with references to its surroundings state meainng it gives you the access to the outer function's scope from the inner function
// example for lexical scoping
function outer(){
    let username ="hitesh"
    function inner(){
        let secret="my123";
        console.log("inner",username);        
    }
    function innerTwo(){
        console.log("innerTwo",username);
        // console.log(secret);
    }
    inner();
    innerTwo();
}
outer()
// console.log("Too Outer",username);

// example for the Closure
// here the function returns the lexical scope of the returned function
function makeFunc(){
    const name="Mozrilla";
    function displayName(){
        console.log(name);
    }
    return displayName;
}

const myFunc=makeFunc();
myFunc();

// Real World Scenario 
// document.getElementById("orange").onclick=function(){
//     document.body.style.backgroundColor=`orange`;
// }
// document.getElementById("green").onclick=function(){    
// }

function clickhandler(color){
    document.body.style.backgroundColor=`${color}`;
    // document.body.style.backgroundColor=`green`;
    return function(){
        document.body.style.backgroundColor=`${color}`
    }
}
document.getElementById("orange").onclick=clickhandler("orange")
document.getElementById("green").onclick=clickhandler("green")
