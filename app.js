let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msgEl = document.querySelector("#msg");
const userScoreEl = document.querySelector("#user-score");
const compScoreEl = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () => {
    msgEl.innerText = "Game draw. Play again";
    msgEl.style.backgroundColor = "#081b31";
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScoreEl.innerText = userScore;
        msgEl.innerText = `You won. Your ${userChoice} beats ${compChoice}`;
        msgEl.style.backgroundColor = "green";
    } else {
        compScore++;
        compScoreEl.innerText = compScore;
        msgEl.innerText = `Computer won. ${compChoice} beats your ${userChoice}`;
        msgEl.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if(userChoice === compChoice){
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock"? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});