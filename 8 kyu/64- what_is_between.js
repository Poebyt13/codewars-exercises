/*
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]
*/

function between(a, b) {
    if (a > b) return null;
    let arr = []
    for (let i = a; i <= b; i++) {
        arr.push(i)
    }

    return arr
}

const betweenDifficult = (a, b) => a > b ? null : Array.from({ length: b - a + 1 }, (_, i) => a + i) 

console.log(between(1, 4))  
console.log(betweenDifficult(1, 4))