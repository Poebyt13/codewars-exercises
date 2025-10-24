// exercise: 8 kyu/75- find_the_smallest_integer_in_the_array.js

/*
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

function findSmallestInt(arr) {
  return arr.reduce((prev, curr) => {
    if (prev > curr) return curr
    return prev
  })
}

console.log(findSmallestInt([34, 15, 88, 2]))