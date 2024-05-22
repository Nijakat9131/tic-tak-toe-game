let boxes=document.querySelectorAll(".box")
let msg=document.querySelector("#msg")
let msgcontainer=document.querySelector(".winner_container")


let turn1=0;
let count=0;

const winning_patter=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box)=>{

    box.addEventListener("click",() => {
           if(turn1==0){
            box.innerText="X";
            box.style.color="black";
            turn1++;
            box.disable
           }
           else{
            box.innerText="O";
            box.style.color="purple";
            turn1=0;
           }

         box.disabled=true;
         count++;
         let iswinner=0;
         chechwinner();
         if(count === 9 && iswinner=== 0){
            draw();
            
         }

         console.log(count);


        
    });


});

const chechwinner = () =>{
    for(let pattern of winning_patter){
        pos1=boxes[pattern[0]].innerText
        pos2=boxes[pattern[1]].innerText
        pos3=boxes[pattern[2]].innerText

        if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1===pos2 && pos2===pos3)
        {
            showwinner(pos1);
            iswinner++;
            disableboxes();
        }
    }
        
    }
}

const showwinner =(winner)=>{
    msg.innerHTML=`Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
}

const draw =() =>{
    msg.innerHTML=`Sorry Game is draw`;
    msgcontainer.classList.remove("hide");
}

const disableboxes =() =>{
    for(let i of boxes){
        i.disabled=true;
    }
}


const reset =()=>{
    turn1=0
    count=0
    enablebox();
    msgcontainer.classList.add("hide");
}


const enablebox = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  };
reset_bt.addEventListener("click",reset);
new_game.addEventListener("click",reset);

