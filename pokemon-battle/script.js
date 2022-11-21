const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll("button")
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener("click", (e)=> {
userChoice = e.target.id
userChoiceDisplay.innerHTML = userChoice
generateComputerChoice()
getResult()
}))

function generateComputerChoice() {
 const randomNumber = Math.floor (Math.random() * 3) + 1 // or possibleChoices.lenght
 
 if (randomNumber === 1) {
    computerChoice = "fire"
 }
 if (randomNumber === 2) {
    computerChoice = "water"
 }
 if (randomNumber === 3) {
    computerChoice = "grass"
 }
 computerChoiceDisplay.innerHTML = computerChoice
}

function getResult () {
    if (computerChoice === userChoice){
        result = "It's a draw!"
    }
    if (computerChoice === 'fire' && userChoice === 'water'){
        result = 'You win!'
    }
    if (computerChoice === 'fire' && userChoice === 'grass'){
        result = 'You lost!'
    }
    if (computerChoice === 'water' && userChoice === 'fire'){
        result = 'You lost!'
    }
    if (computerChoice === 'water' && userChoice === 'grass'){
        result = 'You win!'
    }
    if (computerChoice === 'grass' && userChoice === 'fire'){
        result = 'You win!'
    }
    if (computerChoice === 'grass' && userChoice === 'water'){
        result = 'You lost!'
    }
    resultDisplay.innerHTML = result
}



// When the user clicks on <div>, open the popup
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }