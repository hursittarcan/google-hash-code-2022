const { readFileSync } = require('fs');

function readFile(filename) {
    return readFileSync(filename, 'utf-8');
}

let input = readFile('sample.txt');

let potential_customers = input[0];



console.log("Potential customers: " + potential_customers);