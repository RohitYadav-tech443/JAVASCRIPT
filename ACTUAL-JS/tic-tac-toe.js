let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-game");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");


let turnO=true;//playerX ,playerY;

let arr=[[0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [3,4,5],
        [6,7,8]];
        
const resetGame=() => {
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}


boxes.forEach((box) => {
    box.addEventListener("click",() =>{
       
        if(turnO === true){
        box.innerText="O";
        turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true; // disable the box which is once clicked now 
        checkwinner();
    });
});

const checkwinner =() =>{
    for(let pattern of arr)
    {
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val !="")
        {
            if(pos1Val === pos2Val && pos2Val === pos3Val)
            {
               showWinner(pos1Val);
               return;
               
            }
        }
        if ([...boxes].every((box) => box.innerText !== "")) {
            msg.innerText = "It's a Draw!";
            msgContainer.classList.remove("hide");
            disableBoxes();
    }
}

};
const showWinner = (winner) => {
    msg.innerText = `Player ${winner} Wins!`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};



const disableBoxes=() => {
    for( let box of boxes)
    {
        box.disabled=true;
    }
}

const enableBoxes=() => {
    for( let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}



newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
