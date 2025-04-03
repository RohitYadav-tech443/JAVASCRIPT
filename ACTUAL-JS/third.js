let div=document.querySelector("div");
console.log(div);

let id=div.getAttribute("id");
console.log(id);

let name=div.getAttribute("name");
console.log(name);
// set the Attribute
let para=document.querySelector("p");
console.log(para.setAttribute("class","new class"));

// changing the div style 
div.style.backgroundColor="green";
div.style.fontSize="25px";
// div.innerText="hello"; 

let newBtn=document.createElement("button");
newBtn.innerText="click me!";
newBtn.style.color="red";
newBtn.style.backgroundColor="blue";
console.log(newBtn);

let appending=document.querySelector("p");
appending.append(newBtn);
// appending.prepend(newBtn);
// appending.before(newBtn);
// appending.after(newBtn);

// newBtn.remove();// for removing the newly added button 