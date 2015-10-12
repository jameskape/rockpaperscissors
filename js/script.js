$(document).ready(function() {

// zero both counters
var computerScore = 0;
var humanScore = 0;
var plays = ['rock', 'paper', 'scissors'];

function getComputerPlay() {
  var play = plays[Math.floor(Math.random() * plays.length)];
  return play;
}

function humanRock(){
  var computerChoice = getComputerPlay();
  console.log("computer played: ", computerChoice);

  if (computerChoice === 'paper') {
    computerScore = computerScore + 1;
  } else if (computerChoice === 'rock') {
    computerScore -= 0;
  } else if (computerChoice === 'scissors') {
    computerScore -= 0;
    humanScore += 1;
  }
  $("#humanScore").text(humanScore);
  $("#computerScore").text(computerScore);
}

function humanPaper(){
  var computerChoice = getComputerPlay();
  console.log("computer played: ", computerChoice);

  if (computerChoice === 'paper') {
    computerScore -= 0;
  } else if (computerChoice === 'rock') {
    computerScore -= 0;
    humanScore += 1;
  } else if (computerChoice === 'scissors') {
    computerScore = computerScore + 1;
  }
  $("#humanScore").text(humanScore);
  $("#computerScore").text(computerScore);
}

function humanScissors(){
  var computerChoice = getComputerPlay();
  console.log("computer played: ", computerChoice);

  if (computerChoice === 'paper') {
    computerScore -= 0;
    humanScore += 1;
  } else if (computerChoice === 'rock') {
    computerScore = computerScore + 1;
  } else if (computerChoice === 'scissors') {
    computerScore -= 0;
  }
  $("#humanScore").text(humanScore);
  $("#computerScore").text(computerScore);
}

// Get choice
$('#rock').click(humanRock);
$('#paper').click(humanPaper);
$('#scissors').click(humanScissors);





// Get random

// compare results

// If choice === random - tie

// if choice > random - win

// if choice < random - loose

// if random win add +1 to bot

// if choice win add +1 to you

});
