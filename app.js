let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWorld(letter) {
    if (letter === "r") return "Piedra";
    else if (letter === "p") return "Papel";
    else if (letter === "s") return "Tijera";
}

function win(user, computer) {
    const smallUserWord = "usuario".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    const userChoice_div = document.getElementById(user);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    result_p.innerHTML = convertToWorld(user) + smallUserWord + " derrota a " + convertToWorld(computer) + smallCompWord + " tu ganas!🔥 ";
    userChoice_div.classList.add("green-glow");
    setTimeout(() => {
        userChoice_div.classList.remove("green-glow");
    }, 300);
}

function lose(user, computer) {
    const userChoice_div = document.getElementById(user);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "usuario".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    result_p.innerHTML = convertToWorld(user) + smallUserWord + " pierde contra " + convertToWorld(computer) + smallCompWord + " tu pierdes!😢 ";
    userChoice_div.classList.add("red-glow");
    setTimeout(() => {
        userChoice_div.classList.remove("red-glow");
    }, 300);
}

function draw(user, computer) {
    const userChoice_div = document.getElementById(user);
    const smallUserWord = "usuario".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    result_p.innerHTML = convertToWorld(user) + smallUserWord + " es lo mismo que " + convertToWorld(computer) + smallCompWord + " empate! ";
    userChoice_div.classList.add("grey-glow");
    setTimeout(() => {
        userChoice_div.classList.remove("grey-glow");
    }, 300);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;

        default:
            draw(userChoice, computerChoice);
    }

}

function main() {
    rock_div.addEventListener("click", function () {
        game("r");
    })


    paper_div.addEventListener("click", function () {
        game("p");
    })

    scissors_div.addEventListener("click", function () {
        game("s");
    })
}

main(); 