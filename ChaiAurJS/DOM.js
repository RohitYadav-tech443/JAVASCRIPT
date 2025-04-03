// Windows ==> HTML ==> Head and Body
// Head --> title and metaTag 
// title --> textNode , metaTag --> attribute
// body --> div --> attribute and H1 and paragraph
// H1 -->  attribute and text node 
// paragraph --> textNode 
// DOM is mainly used to make the manipulation on the objects and the things whcih are present on the webPage
const parent=document.querySelector('.parent')
console.log(parent);
console.log(parent.children);
console.log(parent.children[1].innerHTML);
for(let i=0;i<parent.children.length;i++){
    console.log(parent.children[i].innerHTML);
}
parent.children[0].style.color="red";
parent.children[1].style.color="orange";
parent.children[2].style.color="blue";
parent.children[3].style.color="green";
console.log(parent.firstElementChild);// monday
console.log(parent.lastElementChild);// thrusday

const dayOne=document.querySelector('.day');
console.log(dayOne);
console.log(dayOne.parentElement);
console.log(dayOne.nextElementSibling);// n=monday sibling is tuesday
console.log("NODES: ",parent.childNodes);

// for cresting the element in the javascipt on behalg of the HTML
const div=document.createElement('div');
console.log(div);
div.className="main"// now we ae going with the process fo addding the properties to the div class created 
// div.id="myId"
div.id=Math.round(Math.random()*10+1);
div.setAttribute("title","generated title");
div.style.backgroundColor="green";
div.style.padding="12px";
// div.innerText="Chai aur Code";
const addText=document.createTextNode("Chai Aur Code");
div.appendChild(addText);
// now for attaching the creted div by JS to the Webpage
document.body.appendChild(div);

// now we are creating the function whcih would be responsible for teh adding if any langugal texts to the webPage
function addLanguage(langName){
    const li=document.createElement('li');// creating the html tag
    li.innerHTML=`${langName}`;//adding text to that html tag
   const sample= document.querySelector('.language');// creating the DOM of the html language class
    if(sample)
    sample.appendChild(li);//appending the li to that langauge class of html to make changes and also display the changes to the webpage
    else
    console.error("not found"); 

}
addLanguage("Java");
addLanguage("python");

function addOptiLanguage(langName){
    const li=document.querySelector('li');
    li.appendChild(document.createTextNode(langName));
    document.querySelector('.language').appendChild(li);
}
addOptiLanguage('golang');

// Edit
const secondLang=document.querySelector("li:nth-child(2)");
// secondLang.innerHTML="Mojo";
console.log(secondLang);
const newLi =document.createElement('li');
newLi.textContent="MOJO";
secondLang.replaceWith(newLi);

// Edit
const firstdLang=document.querySelector("li:first-child")
firstdLang.outerHTML='<li>TypeScript</li>';
// using this the javascript gets replace with TypeScript

// remove
const lastLang=document.querySelector('li:last-child');
lastLang.remove();