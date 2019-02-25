/*eslint-env browser*/
/*
The Rock, Paper, Scissors Game (20 points)
Rock, paper, scissors is a classic 2 player game. Each player chooses rock, paper or scissors. The possible outcomes include:
•	Rock destroys scissors.
•	Scissors cut paper.
•	Paper covers rock.
Our code will break the game into 3 phases:

//1.	User makes a choice. How will we collect the user’s choice?
//2.	Computer makes a choice. How will we collect the computer’s choice?
//3.	A conditional that determines who wins.
*/

//In this lab you will be responsible for figuring out some of the logic. These next steps will attempt to guide you down the right path:

//1.	Begin by prompting the user for their choice.
var userAction = null; // Initialize as null globally to prompt by default

//6.	What if the user enters something other than rock, paper, or scissors into the prompt? Figure out how to handle that as well.
// The game will keep prompting while the user is not entering a valid action
while(!(userAction === 'ROCK' || userAction === 'PAPER' || userAction === 'SCISSORS')){ // This will prompt by default
    userAction = prompt("Please enter a valid action! (Rock, Paper, Scissors)", "ROCK").toUpperCase();
    if(userAction == null)  break; // Stops the game if the user clicks cancel.
}
if(userAction != null) play(userAction, computerAction()); // Calculate the result if the user entered a valid value


//2.	Create the computer’s choice. This will be generated similarly to the coin flip that you did last week. Remember though, rather than 2 options, there will be 3 here.
function computerAction() {
// Set the value for user's action
    switch (Math.floor(Math.random() * 3) + 1) {
//3.	Depending on what the numeric value of the computer’s choice is, reset it to a string value of rock, paper, or scissors instead.
        case 1: return 'ROCK';
        case 2: return 'PAPER';
        case 3: return 'SCISSORS';
    }
}

//4.	Create a conditional that checks the user’s choice in relation to the computer’s choice. Once a winner is defined, display a message within an alert box indicating who the winner is.
function play(user, computer) {
    // Start building the alert message.
    var userSelection = 'You chose ' + user + "\n"; // Display what the user selected
    var computerSelection = 'The computer chose ' + computer + "\n";  // Display what the computer selected
    var result = null; // The result is defined outside the switch scope

    // Concatenate the selection for cleaner switch
    switch (user+computer) {
        case 'ROCKPAPER':
            result = "Computer wins!";
            break;
        case 'ROCKSCISSORS':
            result = "You win!";
            break;
        case 'PAPERROCK':
            result = "You win!";
            break;
        case 'PAPERSCISSORS':
            result = "Computer wins!";
            break;
        case 'SCISSORSROCK':
            result = "Computer wins!";
            break;
        case 'SCISSORSPAPER':
            result = "You win!";
            break;
        //5.	What if the result ends in a tie? Figure out how to handle that as well.
        default:
            result = "It's a tie!";
    }
    // Displays the result
    alert(userSelection + computerSelection + result);

    // Reloads the page after the result is displayed and the alert has been dismissed
    location.reload();
}






