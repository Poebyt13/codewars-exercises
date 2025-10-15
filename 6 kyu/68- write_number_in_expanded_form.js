// exercise: 6 kyu/68- write_number_in_expanded_form.js

/*
Write Number in Expanded Form

You will be given a number and you will need to return it as a string in Expanded Form. For example:

   12 --> "10 + 2"
   45 --> "40 + 5"
70304 --> "70000 + 300 + 4"
*/

function expandedForm(num) {
    return num
        .toString()
        .split('')
        .map((digit, i, arr) => digit === '0' ? '' : digit + '0'.repeat(arr.length - i - 1))
        .filter(Boolean) 
        .join(' + ');
}

//console.log(expandedForm(12))
//console.log(expandedForm(42))
console.log(expandedForm(70304))

