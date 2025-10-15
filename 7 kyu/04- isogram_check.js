
/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/

function isIsogram(str) {
    let insieme = new Set();
    for (let lettera of str.toLowerCase()) {
        if (insieme.has(lettera)) {
            return false;
        }
        insieme.add(lettera);
    }    
    return true;
}

console.log(isIsogram("Dermatoglyphics"))
console.log(isIsogram("aba"))
console.log(isIsogram("moOse"))
