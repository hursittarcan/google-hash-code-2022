const { readFileSync } = require('fs');

function readFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    return contents.split(/\r?\n/);
}

let input = readFile('data_d.txt');

let potential_customers = input[0].toString();

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
    i++
}

all_liked_ingredients = [...new Set(all_liked_ingredients)];
all_disliked_ingredients = [...new Set(all_disliked_ingredients)];

for (let i = 0; i < all_disliked_ingredients.length; i++) {
    if (all_liked_ingredients.includes(all_disliked_ingredients[i])) {
        let remove_ingredient = all_disliked_ingredients[i];
        all_liked_ingredients = all_liked_ingredients.filter((element) => element !== remove_ingredient);
    }
}

let final_string = all_liked_ingredients.length + " " + all_liked_ingredients.toString();

console.log(final_string.replace(/,/g, " "));

