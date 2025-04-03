const form=document.querySelector('form');
// if we declare these const height and weight outside the form then we will be getting the empty values everytime the webpage will be runned 
form.addEventListener('submit', function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value) // we get this value in the form of the String
    const weight=parseInt(document.querySelector('#weight').value) // we get this value in the form of the String
    const results=(document.querySelector('#results')) // we get this value in the form of the String
    const message=(document.querySelector('#message')) // we get this value in the form of the String
    
    if(height === '' || height<0 || isNaN(height)){
       results.innerHTML=`Please give a valid Height ${height}`
    }
    else if(weight === '' || weight<0 || isNaN(weight)){
        results.innerHTML=`Please give a valid Weight ${weight}`
     }
    const bmi=(weight / ((height*height)/10000)).toFixed(2)
        // show the results
        results.innerHTML=`<span>${bmi}</span>`;

     if(bmi <= 18.6){
        message.innerHTML=`Please eat some food`;
     }
     else if(bmi>=18.6 && bmi<=24.9){
        message.innerHTML=`Please maintain the Diet you have`;
     }
     else if(bmi>= 24.9){
        message.innerHTML=`Please go to the GYM`;
     }
})