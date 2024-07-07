// Write your solution here!
// Define the initial cats array in global scope
var cats = ["Milo", "Otis", "Garfield"];

// Task 1: destructivelyAppendCat
function destructivelyAppendCat(name) {
    cats.push(name);
}

// Task 2: destructivelyPrependCat
function destructivelyPrependCat(name) {
    cats.unshift(name);
}

// Task 3: destructivelyRemoveLastCat
function destructivelyRemoveLastCat() {
    cats.pop();
}

// Task 4: destructivelyRemoveFirstCat
function destructivelyRemoveFirstCat() {
    cats.shift();
}

// Task 5: appendCat
function appendCat(name) {
    return [...cats, name];
}

// Task 6: prependCat
function prependCat(name) {
    return [name, ...cats];
}

// Task 7: removeLastCat
function removeLastCat() {
    return cats.slice(0, -1);
}

// Task 8: removeFirstCat
function removeFirstCat() {
    return cats.slice(1);
}
