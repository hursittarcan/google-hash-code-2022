const { readFileSync } = require('fs');

function readFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    return contents.split(/\r?\n/);
}

let input = readFile('sample.txt');

let potential_customers = input[0].toString();

console.log("Potential customers: " + potential_customers);
console.log()

for (let i = 0; i < potential_customers * 2; i++) {
    //let liked_ingredients = input[i];
    console.log("customer: " )
    console.log("Likes: " + input[i+1]);
    console.log("Dislikes: " + input[i+2]);
    i++
    console.log()
}

