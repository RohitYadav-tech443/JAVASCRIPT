let userscoreJS=0;
let compscoreJS=0;
// now for accessing anything ir any message from the html file we ewill be using the below lines and make sure to use them whenever we nee dto call the things from the html 
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const scoreuser=document.querySelector("#userscore");
const scorecomp=document.querySelector("#compscore");

function genComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    //rock papers scissors
    const randomID = Math.floor(Math.random() * 3); // to generate the random number between 0 to 2
    return options[randomID];

}

const drawgame=() =>{
    console.log("the game was draw");
}


const showWinner=(userWin) =>{
     if(userWin == true){
        console.log("you win");
        msg.innerText= "You Win";
        userscoreJS++;
        scoreuser.innerText=userscoreJS;

     }
    else  {
        console.log("you lose");
        msg.innerText= "You Lose";
        compscoreJS++;
        scorecomp.innerText=compscoreJS;
    }
}


const playGame=(userChoice) =>{
    console.log("User-choice=",userChoice);
    // Generate computer choice 
    const compChoice=genComputerChoice();
    console.log("comp-choice =",compChoice);
    if(userChoice == compChoice){
        //draw game
        drawgame();
        msg.innerText= "The Draw";
    }
    else{
        let userWin=true;
        if(userChoice === "rock")
        {
            if(compChoice === " paper"){
                userWin=false;
            }
            else{
                userWin=true;
            }
        }
        else if(userChoice === "paper")
        {
            if(compChoice === "scissors"){
                userWin=false;
            }
            else
            {
                userWin=true;
            }
        }
        else{
            if(compChoice === "rock"){
                userWin=false;
            }
            else{
                userWin=true;
            }
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
      // console.log("choice was clicked",userChoice);
       playGame(userChoice);
    })
})