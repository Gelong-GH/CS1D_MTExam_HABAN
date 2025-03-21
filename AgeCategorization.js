// Collect user's age using prompt
let age = parseInt(prompt("How old are you? : "));

// Conditional statements to categorize the user's age
if (age < 5) {
    console.log("Ikaw ay sanggol pa lamang (under 5 years).");
} else if (age >= 5 && age <= 12) {
    console.log("Ikaw ay Bata pa (5-12 years).");
} else if (age >= 13 && age <= 19) {
    console.log("Ikaw ay Binatilyo/Dalagita na (13-19 years).");
} else if (age >= 20 && age <= 35) {
    console.log("Ikaw ay Binata/Dalaga na (20-35 years).");
} else if (age >= 36 && age <= 60) {
    console.log("Ikaw ay nasa Middle-Aged na(36-60 years).");
} else if (age > 60) {
    console.log("Ikaw ay nasa Senior na (over 60 years).");
} else {
    console.log("Di matukoy ang iyong edad.");
}