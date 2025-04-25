/**
In mathematics, the factorial of integer n is written as n!. It is equal to the product of n and every integer preceding it. For example: 5! = 1 x 2 x 3 x 4 x 5 = 120

Your mission is simple: write a function that takes an integer n and returns the value of n!.

You are guaranteed an integer argument. For any values outside the non-negative range, return null, nil or None (return an empty string "" in C and C++). For non-negative numbers a full length number is expected for example, return 25! =  "15511210043330985984000000"  as a string.

For more on factorials, see http://en.wikipedia.org/wiki/Factorial

NOTES:

The use of BigInteger or BigNumber functions has been disabled, this requires a complex solution

I have removed the use of require in the javascript language.

 */
function multiply(a, b) {
    let result = Array(a.length + b.toString().length).fill(0);
    console.log(result);
    a = a.split('').reverse();
    b = b.toString().split('').reverse();
    console.log(a, b);

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            result[i + j] += a[i] * b[j];
            result[i + j + 1] += Math.floor(result[i + j] / 10);
            result[i + j] %= 10;
            console.log(result);
        }
    }

    while (result[result.length - 1] === 0) {
        result.pop();
        console.log(result);
    }

    return result.reverse().join('') || '0';
}

function factorial (n) {
    if (n < 0) return null;
    if (n === 0) return '1';
    let result = '1';
    for (let i = 1; i <= n; i++) {
        console.log(result, i);
        result = multiply(result, i);
    }
    return result;
}

console.log(multiply('30', 10));
//console.log(factorial(1));
//console.log(factorial(5)); // -> 120
//console.log(factorial(9)); // -> 362880
//console.log(factorial(15)); // -> 130767436800