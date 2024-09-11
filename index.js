
//create a random response from computer
function computerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        return "Rock";
    }
    else if (randomNumber === 2) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

let computerScore = 0
let playerScore = 0
let roundCount = 0

//Update score on display
function updateScoreDisplay() {
    document.getElementById("score").innerHTML = `Score: ${playerScore} - ${computerScore}`;
}

//check of the round are 5 to end game
function checkGameEnd() {
    if (roundCount === 5) {
        if (playerScore > computerScore){
            document.getElementById("finalResult").innerHTML = "Game Over: You are the winner ! 🏆";
    } else if (playerScore < computerScore) {
        document.getElementById("finalResult").innerHTML = "Game Over: Computer wins ! 💻";
    } else {
        document.getElementById("finalResult").innerHTML = "Game Over: It's a tie ! 😮‍💨";
    }

    }

    }


//player clicks rock
document.getElementById("bRock").addEventListener("click",
    function () {
        const playerChoice = "Rock";
        const computerResult = computerChoice();

        if (playerChoice === computerResult) {
            document.getElementById("finalResult").innerHTML = "It's a tie! 😮‍💨";
        }
        else if (computerResult === "Paper") {
            document.getElementById("finalResult").innerHTML = "You lost! 💀";
            computerScore++;
        }
        else if (computerResult === "Scissors") {
            document.getElementById("finalResult").innerHTML = "You Win! 🤩";
            playerScore++;
        }

        roundCount++ //increment the round
        document.getElementById("computerResultText").innerHTML = computerResult;

        updateScoreDisplay();
        checkGameEnd();

    });

//player clicks paper

document.getElementById("bPaper").addEventListener("click", function () {
    const playerChoice = "Paper";
    const computerResult = computerChoice();

    if (playerChoice === computerResult) {
        document.getElementById("finalResult").innerHTML = "It's a tie! 😮‍💨";
    }
    else if (computerResult === "Scissors") {
        document.getElementById("finalResult").innerHTML = "You lost! 💀";
        computerScore++;
    }
    else if (computerResult === "Rock") {
        document.getElementById("finalResult").innerHTML = "You Win! 🤩";
        playerScore++;
    }
    roundCount++ //increment the round
    document.getElementById("computerResultText").innerHTML = computerResult;

    updateScoreDisplay();
    checkGameEnd();

});

//player clicks scissors

document.getElementById("bScissors").addEventListener("click",
    function () {
        const playerChoice = "Scissors";
        const computerResult = computerChoice();


        if (playerChoice === computerResult) {
            document.getElementById("finalResult").innerHTML = "It's a tie! 😮‍💨";
        }
        else if (computerResult === "Rock") {
            document.getElementById("finalResult").innerHTML = "You lost! 💀";
            computerScore++;
        }
        else if (computerResult === "Paper") {
            document.getElementById("finalResult").innerHTML = "You Win! 🤩";
            playerScore++;
        }
        roundCount++ //increment the round
        document.getElementById("computerResultText").innerHTML = computerResult;

        updateScoreDisplay();
        checkGameEnd();

    });

console.log(playerChoice)
console.log("vs")
console.log(computerResult)
console.log(computerScore, "-", playerScore)








