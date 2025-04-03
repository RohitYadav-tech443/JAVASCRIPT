let divs=document.querySelectorAll(".box");
console.log(divs);
// divs[0].innerText="new val";
// divs[1].innerText="new val";
// divs[2].innerText="new value";

let idx=1;
for(div of divs)
{
    div.innerText=`new unique value ${idx}`;
    idx++;
}