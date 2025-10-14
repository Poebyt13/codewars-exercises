


function stray(numbers) {
    let commonNumber = numbers[0] === numbers[2] ? numbers[0] : numbers[1]

    return numbers.find(el => el !== commonNumber)
}

console.log(stray([1, 1, 2]));
console.log(stray([1, 2, 1]));
console.log(stray([2, 1, 1]));
