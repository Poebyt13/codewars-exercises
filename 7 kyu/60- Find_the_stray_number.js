

/*
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)
*/

function stray(numbers) {
    let commonNumber = numbers[0] === numbers[2] ? numbers[0] : numbers[1]

    return numbers.find(el => el !== commonNumber)
}

console.log(stray([1, 1, 2]));
console.log(stray([1, 2, 1]));
console.log(stray([2, 1, 1]));
