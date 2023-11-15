
let userImg = document.getElementById("userimage");
let compImg = document.getElementById("compimg");
let random;

function HandRandom() {
    random = Math.floor(Math.random() * 3) + 1; // Fix the random number range
    switch (random) {
        case 1:
            compImg.setAttribute("src", "./assets/paper-hand.png");
            break;
        case 2:
            compImg.setAttribute("src", "./assets/rock-hand.png");
            break;
        case 3:
            compImg.setAttribute("src", "./assets/scissors-hand.png");
            break;
    }
}
let RockButton = document.getElementById("rock-logo");
let PaperButton = document.getElementById("paper-logo");
let ScissorButton = document.getElementById("scissors-logo");
let UserScore = document.getElementById("userScore");
let CompScore = document.getElementById("compScore");
let UserScoreVal = 0;
let CompScoreVal = 0;
let result = document.getElementById("resultMatch");
let playAgain = document.getElementById("playAgain");

PaperButton.onclick = () => {
    HandRandom();
    userImg.setAttribute("src", "./assets/paper-hand.png");
    updateScores(2, 3);
};

RockButton.onclick = () => {
    HandRandom();
    userImg.setAttribute("src", "./assets/rock-hand.png");
    updateScores(3, 1);
};

ScissorButton.onclick = () => {
    HandRandom();
    userImg.setAttribute("src", "./assets/scissors-hand.png");
    updateScores(1, 2);
};

function updateScores(win, lose) {
    if (random === win) {
        UserScoreVal++;
        UserScore.textContent = UserScoreVal;
    }
    if (random === lose) {
        CompScoreVal++;
        CompScore.textContent = CompScoreVal;
    }
    endGame();
}

function endGame() {
    if (UserScoreVal === 3 || CompScoreVal === 3) {
        hideButtons();
    }

    if (UserScoreVal === 3) {
        result.textContent = "You won the match!";
        showPlayAgain();
    }

    if (CompScoreVal === 3) {
        result.textContent = "Computer won the match!";
        showPlayAgain();
    }
}

function hideButtons() {
    RockButton.style.visibility = "hidden";
    PaperButton.style.visibility = "hidden";
    ScissorButton.style.visibility = "hidden";
}

function showPlayAgain() {
    playAgain.style.visibility = "visible";
}

playAgain.onclick = () => {
    window.location.reload()
};
