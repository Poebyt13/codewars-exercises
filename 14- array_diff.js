/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

function arrayDiff(a, b) {

	for (const i of b) {
		a = a.filter((elem) => elem !== i);
	}
	return a;
}

console.log(arrayDiff([1, 2], [1]));
console.log(arrayDiff([1, 2, 2, 2, 3], [2]));
console.log(arrayDiff([1, 2, 3, 4, 5, 6], [1,4]));
console.log(arrayDiff([13,-2,-1,9,-9,-3,-9,0,17,-4,-11,14,2,6,11],[13,-2,-1,9]));
console.log(arrayDiff([-9,2,10,1,-15,-19,19,1,-6,16,-13,20,0,-8,15],[-9,2,10,1]))

