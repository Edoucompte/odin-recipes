const choiceTab= ['Rock', 'Paper', 'Scissors'];
var playerScore, computerScore;

// computer choice picker
let getComputerChoice = () => {
    return choiceTab[Math.round(Math.random()*2)];
}

// play a single round of game
function playRound (playerSelection, computerChoice){
    
    if (playerSelection == computerChoice) {
        return "Draw match!";
    } else {
        switch (playerSelection) {
            case 'Rock':
                if (computerChoice === 'Scissors') {
                    playerScore ++;
                    return "You win!," + playerSelection + " beats " + computerChoice;
                } else{
                    computerScore++;
                    return "You lose!," + computerChoice  + " beats " + playerSelection;
                    
                }
                break;
            
            case 'Paper':
                if (computerChoice === 'Rock') {
                    playerScore++;
                    return "You win!," + playerSelection + " beats " + computerChoice;
                } else{
                    computerScore++;
                    return "You lose!," + computerChoice  + " beats " + playerSelection;
                }
                break;
        
            default:
                if (computerChoice === 'Paper') {
                    playerScore++;
                    return "You win!," + playerSelection + " beats " + computerChoice;
                } else{
                    computerScore  ++;
                    return "You lose!," + computerChoice  + " beats " + playerSelection;
                }
                break;
        }
    }
}

// variables
let playerSelection, computerChoice, i = 0;

// program starts here

function playGame() {
    computerChoice = getComputerChoice();

    let str = prompt("Your choice ( Rock, Paper or Scissors) :").toLowerCase(); //get player choice by prompt
    str = str[0].toUpperCase() + str.slice(1); //capitalize this choice like choiceTab elements


    if (choiceTab.includes(str)){ 
        playerSelection = str;
        console.log(playRound(playerSelection, computerChoice));
    }
    else{
        alert("Error! Your choice is undifined");
    }
}

playerScore = 0;
computerScore = 0;
while (i < 5) {
    playGame();
    console.log(playerScore, computerScore);
    i++;
}