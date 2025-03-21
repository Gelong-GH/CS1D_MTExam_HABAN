// Using Prompt() to create a grocery list
let createList = prompt("Gusto mo bang gumawa ng sarili mong Grocery List? (y/n): ").toLowerCase();

if (createList === 'y') {
    // Prompt the user for the number of items
    let numItems = parseInt(prompt("Ilan ang gusto mong ibilang sa iyong grocery list: "));
    
    // Initialize an array to store the grocery items
    let groceryList = [];

    // Loop to collect the grocery items from the user
    for (let i = 0; i < numItems; i++) {
        let item = prompt(`Enter item ${i + 1}:`);
        groceryList.push(item);
    }

    // Sort the grocery list
    let groceryListSort = [...groceryList].sort();

    // Reverse the grocery list
    let groceryListReverse = [...groceryList].reverse();

    // Print the grocery lists using alert
    alert(`Grocery List: ${groceryList.join(', ')}`);
    alert(`Sorted Grocery List: ${groceryListSort.join(', ')}`);
    alert(`Reversed Grocery List: ${groceryListReverse.join(', ')}`);
} else {
    alert("Ooops!! Wala kang nailistang grocery Items.");
}