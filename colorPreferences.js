// Declaring an array to store the colors
let colors = [];

// Using a for loop to collect three colors from the user
for (let i = 0; i < 3; i++) {
    // using Prompt() to enter a color
    let color = prompt(`Enter color ${i + 1}:`);
    
    // Adding color to the array using the push() method
    colors.push(color);
    
    // Print the updated array to the console
    console.log(`Updated colors array: ${colors}`);
}