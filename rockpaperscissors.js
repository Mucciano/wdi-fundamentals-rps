////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
       
   
   playerMove = getPlayerMove(playerMove);
   computerMove = getComputerMove(computerMove);
   
    if 
    ((playerMove ==='rock') && (computerMove ==='scissors')) winner = 'player';
    else if
    ((playerMove ==='scissors') && (computerMove ==='paper')) winner = 'player';
    else if
    ((playerMove ==='paper') && (computerMove ==='rock')) winner = 'player';
    else if
    (playerMove === computerMove) winner = 'tie';
    else
    winner = 'computer'; 
  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove );

    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var winner = [ ]; 
    
  for (var i=0; i<=20; i++) {winner.push(getWinner())
 
  var Pwin = 0;
for(var x=0;x<winner.length;x++){
    if(winner[x] == 'player')
      { Pwin++; if (Pwin === 5) {return console.log("Game Over, Player wins with 5 points!")}} 
}
 
   var Cwin = 0;
for(var a=0;a<winner.length;a++){
    if(winner[a] == 'computer')
      { Cwin++;if (Cwin === 5) {return console.log("Game Over, Computer wins with 5 points!");} }
}

console.log('The score is ' + Pwin + ' point(s) for player and ' + Cwin + ' point(s) for the computer.');
  
  }   
}

playToFive()
