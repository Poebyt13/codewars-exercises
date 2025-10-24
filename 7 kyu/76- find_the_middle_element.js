// exercise: 7 kyu/76- find_the_middle_element.js

/*
As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

*/

function gimme(arr) {
  const [a, b, c] = arr;

  if ((a > b && a < c) || (a < b && a > c)) return arr.indexOf(a);
  if ((b > a && b < c) || (b < a && b > c)) return arr.indexOf(b);
  return arr.indexOf(c);
}


console.log(gimme([5, 10, 14]))
