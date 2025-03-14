/*
Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples
The output expected would be:

apples, pears
grapes
bananas
The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"
*/

function solution(text, markers) {
    text = text.trimEnd()
    if (!markers) {
        return text;
    }

    let textArr = text.split("");
    for (const i of markers) {
		textArr = textArr.filter((elem) => elem !== i);
	}
    let result = textArr.join("");
    return result;
}

console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]));
console.log(solution("aa bb cc  ", []));
console.log(solution("aa bb # cc", ['#']));
