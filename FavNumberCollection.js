// Declare a variable to hold the favorite number
let favNumber = 83; // You can set this to any number you like

// Declare a variable to store the user's guess
let guess;

// Use a while loop to repeatedly ask the user to guess the favorite number until they guess correctly
while (guess !== favNumber) {
    // Prompt the user to enter their guess
    guess = parseInt(prompt("Guess the favorite number: "));
    
    // Check if the guess is too high, too low, or correct
    if (guess > favNumber) {
        console.log("Too Hot.");
    } else if (guess < favNumber) {
        console.log("Too Low.");
    } else if (guess === favNumber) {
        console.log("Bingo! Base Plate Bravo 1, you're clear to Engage!");
    } else {
        console.log("Too Late, Bravo 1. We need to force Evac!");
    }
}