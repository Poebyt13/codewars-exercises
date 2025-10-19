// exercise: 6 kyu/69- simple_encryption_1__alternating_split.js

/*
Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.
*/

function encrypt(text, n) {

    if (!text || n <= 0) return text;

    const run = (number) => {
        let even = ""
            odd = "";
        for (let i = 0; i < number.length; i++) {
            if (i % 2 === 0) even += number[i];
            if (i % 2 !== 0) odd += number[i];
        }
        return odd + even;
    };

    let res = run(text);
    let count = 1;

    while (count < n) {
        res = run(res)
        count++;
    }
    
    return res
}

function decrypt(encryptedText, n) { 

    if (!encryptedText || n <= 0) return encryptedText;

    const run = (number) => {
        let meta = number.length / 2
        let right = [...number.slice(meta, number.length)]
        let left = [...number.slice(0,meta)]
        let res = ""
        right.forEach((val, i) => {
            if (val) res += val
            if (left[i]) res += left[i]
        });
        return res;
    }

    let res = run(encryptedText);
    let count = 1;

    while (count < n) {
        res = run(res)
        count++;
    }
    
    return res
         
}

/*
console.log(encrypt("012345", 2))
console.log(encrypt("012345", 1));
console.log(encrypt("012345", 3));
console.log(encrypt("01234", 1));
console.log(encrypt("01234", 2));
console.log(encrypt("01234", 3));
*/

console.log(decrypt("012345", 1))
console.log(decrypt("20314", 1))