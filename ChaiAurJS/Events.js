// document.getElementById('#owl').onclick=funtion(){
//     alert("owl clicked");
// }

// study by you -> types ,timestamp,defaultprevented
// target,toElement, srcElement, currentTarget
// interview prospective -> clientX,clientY , screen x and Y 
// altkey,ctrlkey,shiftkey,keycode

document.getElementById('owl').addEventListener('click',function(e){
    // alert("Owl was clickd");
    console.log("clicked inside the ul");    
},false);

document.getElementById('owl').addEventListener('click',function(e){
    // alert("Owl was clickd");
    console.log("Owl clicked");    
    e.stopPropagation();
},false);

// Event propogation -> event bubbling and event capturing
// when we want to do event bubbling we use the event bubbling but when we ewant to do the event capturing we go with the event capturing 

document.getElementById('google').addEventListener
('click',function(e){
    console.log("clicked");
    e.preventDefault();
    e.stopPropagation();
},false);


document.querySelector('#images').addEventListener
('click',function(e){
    console.log(e);
    console.log(e.target);
    console.log(e.target.parentNode);
    if(e.target.tagName === 'IMG'){
        console.log(e.target.id);
        let removeIt=e.target.parentNode
        removeIt.remove();
    }
  
    // let removeIt.parentNode.removeChild(removeIt)
    
},false)

// Async awaits JavaScript
 