//Declaring your variables in the start
//You can also grab your elements (line 5-6) to use later, naming is important!
//This is called Caching the DOM.
//This means to store something for future use!
//Every one of your projects should start like this.
let userScore = 0;
let computerScore= 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//When user clicks on a button, those buttons are compared to the computers choice and then it will show who wins.
function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}
//Takes the letter and converts it to a word thats displayed on the screen
function convertToWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
    
}

//If the user wins the score goes up
//shows the score change in the scoreboard 
//displays the message that you won along with who picked what.
function win(userChoice,computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_div.innerHTML =`${convertToWord(userChoice)}${smallUserWord}  beats ${convertToWord(computerChoice)}${smallCompWord}. You Win!`;
    document.getElementById(userChoice).classList.add('winningStyles');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('winningStyles')}, 2000);    
}
//If the comp wins the score goes up
//shows the score change in the scoreboard 
//displays the message that you lost along with who picked what.
function lose(userChoice,computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_div.innerHTML =`${convertToWord(userChoice)}${smallUserWord}  loses to ${convertToWord(computerChoice)}${smallCompWord}.`;
    document.getElementById(userChoice).classList.add('losingStyles');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('losingStyles')}, 2000);    
}

//displays the message that you tied along with who picked what.
function draw(userChoice,computerChoice){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_div.innerHTML =`${convertToWord(userChoice)}${smallUserWord} equals  ${convertToWord(computerChoice)}${smallCompWord}.It's a Draw!`;
    document.getElementById(userChoice).classList.add('drawStyles');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('drawStyles')}, 2000);    
}

//the win conditions
function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice);
            break;
    }
}


//main function that listens for the click on the image and then runs the game function
function main(){
    rock_div.addEventListener('click', function(){
        game("r");
    });

    paper_div.addEventListener('click', function(){
        game("p");
    });

    scissors_div.addEventListener('click', function(){
        game("s");
    })
}
main();