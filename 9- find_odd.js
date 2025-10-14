/*
Dato un array di numeri interi, trova quello che compare un numero dispari di volte.

Ci sarà sempre un solo numero intero che apparirà un numero dispari di volte.

Esempi
[7]dovrebbe restituire 7, perché si verifica 1 volta (il che è dispari).
[0]dovrebbe restituire 0, perché si verifica 1 volta (il che è dispari).
[1,1,2]dovrebbe restituire 2, perché si verifica 1 volta (il che è dispari).
[0,1,0,1,0]dovrebbe restituire 0, perché si verifica 3 volte (il che è dispari).
[1,2,2,3,3,3,4,3,3,3,2,2,1]dovrebbe restituire 4, perché appare 1 volta (il che è dispari).
*/

function findOdd(A) {

    let numeri = {}
    for (let i = 0; i < A.length; i++) {
        if (!numeri[A[i]]){
            numeri[A[i]] = 0
        }
        numeri[A[i]]++;
    }

    let max = 0;
    for (const [key,value] of Object.entries(numeri)) {
        if (value % 2){
            value > max ? max = key : '';
        }
    }

    return parseInt(max);

}

console.log(findOdd([7]))
console.log(findOdd([0]))
console.log(findOdd([1,1,2]))
console.log(findOdd([0,1,0,1,0]))
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))