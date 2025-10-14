/*
Scrivi un algoritmo che prenda un array e sposti tutti gli zeri alla fine, preservando l'ordine degli altri elementi.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

function moveZeros(arr) {
    const arrSenzaZero = arr.filter((i) => i !== 0);
    return [...arrSenzaZero, ...Array(arr.length - arrSenzaZero.length).fill(0)]      
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))