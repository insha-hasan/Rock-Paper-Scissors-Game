let userScore=0;
let compScore=0;

const msg=document.querySelector("#msg");
const choices=document.querySelectorAll(".choice");

const uScore=document.querySelector("#user-score");
const cScore=document.querySelector("#comp-score");


const genCompChoice=()=>{
    const option=["rock", "paper", "scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return option[randIdx];
}
const draw=()=>{
msg.innerText="Game was draw! Play Again";
msg.style.backgroundColor="#081b31";

}

const showWin=(userWin, userChoice, compChoice)=>{
 if(userWin){
   userScore++;
   uScore.innerText= userScore;
   msg.innerText= `You Win! Your ${userChoice} beats ${compChoice}`;
   msg.style.backgroundColor="green";
 }
 else{
  compScore++;
  cScore.innerText= compScore;
 msg.innerText= `You lost! ${compChoice} beats your ${userChoice}`;
  msg.style.backgroundColor="red";

 }
};

const playGame=(userChoice)=>{
const compChoice=genCompChoice();

if(userChoice===compChoice){
draw();
}
  else{
        let userWin=true;
              if(userChoice==="rock"){
            userWin = compChoice==="paper"? false:true;
      }
      else if(userChoice==="paper"){
        userWin= compChoice==="scissors"? false:true;
      }
      else{
        userWin= compChoice==="rock"? false:true;
      }
      showWin(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      playGame(userChoice);
    });

  });
  function pauseVideo(element) {
    const video = element.querySelector('video');
    video.pause();
}
 function playVideo(element) {
        const video = element.querySelector('video');
        video.play();
    }









































