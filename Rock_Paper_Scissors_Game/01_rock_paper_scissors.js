let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msgPara = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

const drawGame = () => {
    msgPara.innerText = "It's a DRAW.";
    msgPara.style.backgroundColor = "black";
};

const result = () => {
    if (userWin)
    {
        msgPara.innerText = "Yah! You Won.";
        msgPara.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;
    } else {
        msgPara.innerText = "You Lost.";
        msgPara.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerText = compScore;
    }
};

choices.forEach((choice) => {
    const userChoice = choice.getAttribute("id");
    choice.addEventListener("click", () => {
        playGame(userChoice);
    });
});

let genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    const idx = Math.floor(Math.random() * 3);
    return(options[idx]);
};

const playGame = (userChoice) => {
    console.log("User Choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log(`Computer Choice = ${compChoice}`);
    if (userChoice === compChoice)
    {
        drawGame();
    } else 
    {
        userWin = true;
        if (userChoice === "rock")
        {
            userWin = (compChoice === "paper") ? false : true;
        } else if (userChoice === "paper")
        {
            userWin = (compChoice === "scissors") ? false : true;
        } else
        {
            userWin = (compChoice === "rock") ? false : true;
        }
        result();
    }
};
