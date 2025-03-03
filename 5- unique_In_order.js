
/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

function uniqueInOrder(iterable) {
    if (!iterable || iterable.length === 0 || iterable[0] === undefined) {
        return [];
    }

    let arr = [];
    
    for (let i = 0; i < iterable.length; i++) {
        if (i === 0 || iterable[i] !== iterable[i - 1]) {
            arr.push(iterable[i]);
        }
    }

    return arr;
}


console.log(uniqueInOrder('AAAABBBCCDAABBB'))
console.log(uniqueInOrder('ABBCcAD'))
console.log(uniqueInOrder([1,2,2,3,3]))
console.log(uniqueInOrder([undefined]))

