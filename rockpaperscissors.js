/**
 * Rock Paper Scissors Game Algorithm:
 *
 * 1. Initialize the game:
 *    - Set initial scores for human and computer to 0.
 *    - Define the total number of rounds (default is 5).
 * 
 * 2. Define function to get the computer's choice:
 *    - Generate a random number between 0 and 2.
 *    - Assign "rock", "paper", or "scissors" based on the random number.
 * 
 * 3. Define function to play a single round:
 *    - Compare human choice and computer choice to determine the winner.
 *    - Update scores based on the result.
 *    - Display the result of the round.
 * 
 * 4. Define function to update and display scores:
 *    - Update the HTML elements to reflect current scores.
 * 
 * 5. Define function to display the final result:
 *    - Compare the final scores after all rounds.
 *    - Display the final result (win, lose, or tie).
 * 
 * 6. Define event listeners for user choices:
 *    - Attach click event listeners to the "ROCK", "PAPER", and "SCISSORS" buttons.
 *    - Call the playRound function with the user's choice when a button is clicked.
 * 
 * 7. Define reset functionality:
 *    - Reset scores and clear results.
 *    - Update the HTML elements to reflect the reset state.
 * 
 * 8. Start the game:
 *    - Initialize the game by setting up event listeners and resetting the game state.
 */

// Initialize scores and round count
let humanScore = 0; // Human player's score
let computerScore = 0; // Computer player's score
let roundsPlayed = 0; // Number of rounds played
const totalRounds = 5; // Total number of rounds in the game

// Function to get the computer's choice randomly
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3); // Generate a random number between 0 and 2
    return choices[randomNumber]; // Return the corresponding choice
}

// Function to play a single round of Rock Paper Scissors
function playRound(humanChoice, computerChoice) {
    // Determine the winner based on the rules of the game
    if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
        return "human"; // Human wins
    } else if ((humanChoice === "rock" && computerChoice === "paper") ||
               (humanChoice === "paper" && computerChoice === "scissors") ||
               (humanChoice === "scissors" && computerChoice === "rock")) {
        return "computer"; // Computer wins
    } else {
        return "tie"; // It's a tie
    }
}

// Function to update the DOM with the results of each round
function updateDOM(result, humanChoice, computerChoice) {
    const resultElement = document.getElementById("result"); // Get the result element
    const scoreElement = document.getElementById("score"); // Get the score element

    // Update scores and display the result of the round
    if (result === "human") {
        humanScore++; // Increment human score
        resultElement.textContent = `You win this round! ${humanChoice} beats ${computerChoice}.`; // Display win message
    } else if (result === "computer") {
        computerScore++; // Increment computer score
        resultElement.textContent = `You lose this round! ${computerChoice} beats ${humanChoice}.`; // Display lose message
    } else {
        resultElement.textContent = `It's a tie this round! Both chose ${humanChoice}.`; // Display tie message
    }

    // Update the score display
    scoreElement.textContent = `Score - You: ${humanScore}, Computer: ${computerScore}`; // Update score text
}

// Function to declare the final winner after all rounds are played
function declareWinner() {
    const finalResultElement = document.getElementById("finalResult"); // Get the final result element
    if (humanScore > computerScore) {
        finalResultElement.textContent = "You win the game!"; // Display win message if human has higher score
    } else if (humanScore < computerScore) {
        finalResultElement.textContent = "You lose the game!"; // Display lose message if computer has higher score
    } else {
        finalResultElement.textContent = "The game is a tie!"; // Display tie message if scores are equal
    }
}

// Function to handle user's choice and play a round
function makeChoice(humanChoice) {
    const computerChoice = getComputerChoice(); // Get computer's choice
    const result = playRound(humanChoice, computerChoice); // Play a round and get the result
    updateDOM(result, humanChoice, computerChoice); // Update the DOM with the result

    // Increment the rounds played and check if the game should end
    roundsPlayed++;
    if (roundsPlayed === totalRounds) {
        declareWinner(); // Declare the final winner if all rounds are played
    }
}

// Event listeners for the buttons
document.getElementById("rock").addEventListener("click", () => makeChoice("rock")); // Play a round with "rock" choice
document.getElementById("paper").addEventListener("click", () => makeChoice("paper")); // Play a round with "paper" choice
document.getElementById("scissors").addEventListener("click", () => makeChoice("scissors")); // Play a round with "scissors" choice

// Function to reset the game
document.getElementById("reset").addEventListener("click", () => {
    humanScore = 0; // Reset human score
    computerScore = 0; // Reset computer score
    roundsPlayed = 0; // Reset rounds played
    document.getElementById("result").textContent = ""; // Clear result text
    document.getElementById("score").textContent = "Score - You: 0, Computer: 0"; // Reset score display
    document.getElementById("finalResult").textContent = ""; // Clear final result text
});
