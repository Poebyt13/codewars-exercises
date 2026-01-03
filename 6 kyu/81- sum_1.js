// exercise: 6 kyu/81- sum_1.js

/*
PUZZLE #1. SUM

Assignment:

Write a function named sum which performs addition in the way shown below:

sum(4)(5)(9)(); // => 18
sum(5)();       // => 5
sum();          // => 0
NOTE: Pay attention that the last brackets are left empty to indicate the end of operations.

Thanks to @JohanWiltink, @donaldsebleung
*/

function sum(x) {
    
    if (x === undefined) return 0

    let total = x;

    function helper(y) {
        if (y === undefined) return total

        total += y

        return helper;
    }

    return helper
}

console.log(sum(4)(5)(9)(0)); 
//console.log(sum(5)())
//console.log(sum())