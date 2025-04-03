// let btn1=document.querySelector("#btn1");

// btn1.onclick = () =>{
//     console.log("btn1 was clicked");
//     let a=25;
//     a++;
//     console.log(a); //26
// };
// btn1.onclick =(e) =>{
//     console.log(e);
//     console.log(e.type);
// };
let btn1=document.querySelector("#btn1");
btn1.addEventListener("click",(e)=> {
    console.log("button 1 was clicked");
    console.log(e);
    console.log(e.type);
})
let div=document.querySelector("div");
div.onmouseover =() =>
{
    console.log("you are inside div");
}