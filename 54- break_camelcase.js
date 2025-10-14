/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

function solution(string) {
    let res = "";
    for (const el of string) {
        if (el === el.toUpperCase()){
            res += " "
        }
        res += el
    }
    return res;
}

console.log(solution("camelCasing"));
console.log(solution("identifier"));
console.log(solution(""));
