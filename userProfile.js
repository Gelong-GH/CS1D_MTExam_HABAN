let Name = prompt("What is your name?: "); //
let Age = parseInt(prompt("How old are you? : "));
let FavColor = prompt("What is your Favorite Color? : ");
let FavNumber = parseInt(prompt("What is your Favotie Number?: "));

console.log("Name:", Name);
console.log("Age:", Age);
console.log("Favorite Color:", FavColor);
console.log("Favorite Number:", FavNumber);


/*prompt--> displays a dialog box with the specified
            message and waits for the user's input
        --> The input from the user is stored in a Variables
            Name, Age, FavColor, and FavNumber.

parseInt--> This function Converts the user input (which is a string)
            into an Integer.
        --> The input in Age and FavNumber is actually a string by default 
            And converted to and Integer using the parseInt().

console.log()--> Used for debbuging and verifying values of the variables.
                 In short, it prints the user's variable placeholder.*/
                 
                 