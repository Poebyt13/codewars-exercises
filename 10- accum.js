/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/

function accum(s) {
	res = ""
    for (let i = 0; i < s.length; i++) {
        res += s[i].toUpperCase() + s[i].repeat(i).toLowerCase();
        i != s.length - 1 ? res+='-' : ''; 
    }
    return res;
}

console.log(accum("abcd"))
console.log(accum("RqaEzty"))
console.log(accum("cwAt"))
