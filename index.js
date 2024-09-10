//STRUCTURE
//enter users input
//game to create a random response CHECK
    // add result after the user click
// game to output response CHECK
// who won?
//add css 



//computer result
function computerChoice() {
    const randomNumber = Math.floor(Math.random()*3)+1;

if (randomNumber === 1){
    return "Rock";
}
else if(randomNumber === 2){
    return "Paper";
}
else {
    return "Scissors";
}
}


//player click rock
document.getElementById("bRock").addEventListener("click", function() {
    const playerChoice = "Rock";
    const computerResult = computerChoice();

    if (playerChoice === computerResult) {
        document.getElementById("finalResult").innerHTML = "It's a tie! 😮‍💨";
    }
    else if (computerResult === "Paper") {
        document.getElementById("finalResult").innerHTML = "You lost! 💀";
    }
    else if (computerResult === "Scissors") {
        document.getElementById("finalResult").innerHTML = "You Win! 🤩";
    }

    document.getElementById("computerResultText").innerHTML =  computerResult;


    console.log(playerChoice)
    console.log("vs")
    console.log(computerResult)
});

//player click paper

document.getElementById("bPaper").addEventListener("click", function() {
    const playerChoice = "Paper";
    const computerResult = computerChoice();

    if (playerChoice === computerResult) {
        document.getElementById("finalResult").innerHTML = "It's a tie! 😮‍💨";
    }
    else if (computerResult === "Scissors") {
        document.getElementById("finalResult").innerHTML = "You lost! 💀";
    }
    else if (computerResult === "Rock") {
        document.getElementById("finalResult").innerHTML = "You Win! 🤩";
    }

    document.getElementById("computerResultText").innerHTML =  computerResult;

    console.log(playerChoice)
    console.log("vs")
    console.log(computerResult)
});

//player click scissors

document.getElementById("bScissors").addEventListener("click", function() {
    const playerChoice = "Scissors";
    const computerResult = computerChoice();

    if (playerChoice === computerResult) {
        document.getElementById("finalResult").innerHTML = "It's a tie! 😮‍💨";
    }
    else if (computerResult === "Rock") {
        document.getElementById("finalResult").innerHTML = "You lost! 💀";
    }
    else if (computerResult === "Paper") {
        document.getElementById("finalResult").innerHTML = "You Win! 🤩";
    }

    document.getElementById("computerResultText").innerHTML =  computerResult;

    console.log(playerChoice)
    console.log("vs")
    console.log(computerResult)
});

