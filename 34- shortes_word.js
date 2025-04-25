/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s){
    return s.split(" ").map(word => word.length).sort((a, b) => a - b)[0];
}

console.log(findShort("I am the best")); // 1
console.log(findShort("Let's travel abroad shall we")); // 2