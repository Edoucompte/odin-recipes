// game Station

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
                    return "You win!, " + playerSelection + " beats " + computerChoice;
                } else{
                    computerScore++;
                    return "You lose!, " + computerChoice  + " beats " + playerSelection;
                    
                }
                break;
            
            case 'Paper':
                if (computerChoice === 'Rock') {
                    playerScore++;
                    return "You win!, " + playerSelection + " beats " + computerChoice;
                } else{
                    computerScore++;
                    return "You lose!, " + computerChoice  + " beats " + playerSelection;
                }
                break;
        
            default:
                if (computerChoice === 'Paper') {
                    playerScore++;
                    return "You win!, " + playerSelection + " beats " + computerChoice;
                } else{
                    computerScore  ++;
                    return "You lose!, " + computerChoice  + " beats " + playerSelection;
                }
                break;
        }
    }
}

// variables
let playerSelection, computerChoice;

// Game program starts here

function playGame() {
    
    choiceDiv.onclick= (e)=>{
        
        //Computer makes random choice
        computerChoice = getComputerChoice();

        //Ask for player choice
        playerSelection = e.target.alt;

        //Play a round and show the result
        comment.textContent = playRound(playerSelection, computerChoice);
        scorePlayer.textContent= playerScore;
        scoreComp.textContent= computerScore;

        if (Math.max(playerScore, computerScore)==5) {
            playerScore = 0;
            computerScore= 0;
            choiceDiv.classList.add('hide');
            play_button.textContent= 'Restart?'
            play_button.classList.remove('hide');
        }
    }
}

// Game station end


//player station start 
const p1= document.getElementById('p1');
const p2= document.getElementById('p2');

// scores
const comment = document.getElementById('comment');
const scoreComp = document.getElementById('scoreComp');
const scorePlayer = document.getElementById('scorePlayer');
const scoreDiv= document.getElementById('scorediv');


const play_button = document.getElementById('play');
const choice_span = document.getElementById('choice');
const choiceDiv = document.getElementById('choice');


// When player click on play button 
play_button.onclick = ()=>{

    // Scores init
    playerScore = 0;
    computerScore = 0;

    scoreComp.textContent = '0';
    scorePlayer.textContent = '0';
    comment.textContent= '';

    //Tranformation for one game
    play_button.classList.add('hide');
    p1.classList.add('hide');
    p2.classList.remove('hide');
    scoreDiv.style.display= 'flex';
    choice_span.classList.remove('hide');
    playGame(); 
        
}


