let userScore = 0;
let botScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const bot = document.querySelector("#bot-score");
const user = document.querySelector("#user-score");
const resetBtn = document.querySelector("#reset-btn");

const genCompChoice = () => {
     const option = ["rock","paper","scissor"];
     const randIdx = Math.floor(Math.random() * 3);
     return option[randIdx];
};

const drawGame = () => {
     msg.innerText = "Game was draw!";
     msg.style.backgroundColor = "linear-gradient(90deg, #3a7bd5, #3a6073)";
};
const showWinner = (userWin,userChoice,compChoice) => {
     if(userWin){
          userScore++;
          user.innerText = userScore;
          msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
     }
     else{
          botScore++;
          bot.innerText = botScore;
          msg.innerText = `You Lose! ${userChoice} beats Your ${compChoice}`;
     }
};
const playGame = (userChoice) => {
     console.log("user choice = ",userChoice);
     const compChoice = genCompChoice();
     console.log("computer choice = ",compChoice);
     
     if(userChoice === compChoice){
          drawGame();
     }
     else{ 
          let userWin = true;
          if(userChoice === "rock"){
               userWin = compChoice === "paper" ? false : true;
          }
          else if(userChoice === "paper"){
               userWin = compChoice === "scissor" ? false : true;
          }
          else{
               userWin = compChoice === "rock" ? false : true;
          }
          showWinner(userWin,userChoice,compChoice);
     }
};

choices.forEach((choice)=> {
     choice.addEventListener("click",()=>{
          const userChoice = choice.getAttribute("id");
          playGame(userChoice);
     });
});
const resetGame = () => {
     userScore = 0;
     botScore = 0;
     user.innerText = userScore;
     bot.innerText = botScore;
     msg.innerText = "Play your move";
     msg.style.backgroundColor = "#36393B";
};

resetBtn.addEventListener("click", resetGame);
