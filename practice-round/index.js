const { readFileSync } = require('fs');

function readFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    return contents.split(/\r?\n/);
}

let input = readFile('sample.txt');

let potential_customers = input[0].toString();

console.log("Potential customers: " + potential_customers);
console.log()

let all_liked_ingredients = [];
let all_disliked_ingredients = [];

for (let i = 0; i < potential_customers * 2; i++) {

    let liked_ingredients = input[i + 1];
    let disliked_ingredients = input[i+2];

    const splitted_liked_ingredients = liked_ingredients.split(" ");
    let amount_of_liked_ingredients = splitted_liked_ingredients[0];
    for (let i = 1; i <= amount_of_liked_ingredients; i++) {
        all_liked_ingredients.push(splitted_liked_ingredients[i]);
    }

    const splitted_disliked_ingredients = disliked_ingredients.split(" ");
    let amount_of_disliked_ingredients = splitted_disliked_ingredients[0];
    for (let i = 1; i <= amount_of_disliked_ingredients; i++) {
        if (splitted_disliked_ingredients[i] !== "") {
            all_disliked_ingredients.push(splitted_disliked_ingredients[i]);
        }
    }

    console.log("customer: " )
    console.log("------------------------------------")
    console.log("Likes: " + liked_ingredients);
    console.log("Dislikes: " + disliked_ingredients);
    console.log("------------------------------------")
    i++
    console.log()
}
console.log("All liked ingredients: " + all_liked_ingredients);
console.log("All disliked ingredients: " + all_disliked_ingredients);

