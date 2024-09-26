console.log("heya!");
const NOCHOICE = 0;
const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

const RPS_ERR_OK = 0;
const RPS_ERR_BAD_ENTRY = 1;

const RPS_EQUAL = 0;
const RPS_HUMAN_WON = 1;
const RPS_COMPUTER_WON = 2;

let humanChoice = NOCHOICE;
let computerChoice = NOCHOICE;

const rpsPromptStr = "rock, paper, or scissors?";
const rpsRetryStr = "try again!\nrock, paper, or scissors?";
const rpsEqualStr = "a tie!\n";
const rpsHumanWonStr = "you won!";
const rpsComputerWonStr = "you lost...";

let rpsResult = 0;

function getComputerChoice() {
    let temp = Math.random();
    if ( temp < (1/3)) {
        console.log("computer chose.. rock! " + temp);
        computerChoice = ROCK;
    } else if (temp < (2/3)) {
        console.log("computer chose.. paper! " + temp);
        computerChoice = PAPER;
    } else {
        console.log("computer chose.. scissors! " + temp);
        computerChoice = SCISSORS;
    }
}

function promptHuman(str){
    let humanRPS = prompt(str);
    return humanRPS;
}
function getHumanChoice(str) {
    let err_t = RPS_ERR_OK;
    let humanRPS = promptHuman(str);

    switch (humanRPS) {
        case "rock":
            humanChoice = ROCK;
            break;
        case "paper":
            humanChoice = PAPER;
            break;
        case "scissors":
            humanChoice = SCISSORS;
            break;
        default:
            err_t = RPS_ERR_BAD_ENTRY;
            break;
    }
    return err_t;
}

function computeRPS() {
    switch (humanChoice) {
        case ROCK:
            switch (computerChoice) {
                case ROCK:
                    return RPS_EQUAL;
                    break;
                case PAPER:
                    return RPS_COMPUTER_WON;
                    break;
                case SCISSORS:
                    return RPS_HUMAN_WON;
                    break;
                default:
                    break;
            }
            break;
        case PAPER:
            switch (computerChoice) {
                case ROCK:
                    return RPS_HUMAN_WON;
                    break;
                case PAPER:
                    return RPS_EQUAL;
                    break;
                case SCISSORS:
                    return RPS_COMPUTER_WON;
                    break;
                default:
                    break;
            }
            break;
        case SCISSORS:
            switch (computerChoice) {
                case ROCK:
                    return RPS_COMPUTER_WON;
                    break;
                case PAPER:
                    return RPS_HUMAN_WON;
                    break;
                case SCISSORS:
                    return RPS_EQUAL;
                    break;
                default:
                    break;
            }
            break;
        default:
            console.log("HUH ERROR");
            break;
    }
}

if (getHumanChoice(rpsPromptStr) != RPS_ERR_OK) {
    while (getHumanChoice(rpsRetryStr) != RPS_ERR_OK) {
    }
};

getComputerChoice();
rpsResult = computeRPS();

while (rpsResult == RPS_EQUAL) {
    while (getHumanChoice(rpsEqualStr + rpsPromptStr) != RPS_ERR_OK) {
    }
    getComputerChoice();
    rpsResult = computeRPS();
}

if (rpsResult == RPS_HUMAN_WON) {
    window.alert(rpsHumanWonStr);
} else {
    window.alert(rpsComputerWonStr);
}