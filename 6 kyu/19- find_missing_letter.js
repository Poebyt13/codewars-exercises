/*
Trova la lettera mancante
Scrivi un metodo che accetti come input un array di lettere consecutive (crescenti) e che restituisca la lettera mancante nell'array.

Otterrai sempre un array valido. E mancherà sempre esattamente una lettera. La lunghezza dell'array sarà sempre almeno 2.
L'array conterrà sempre lettere in un solo caso.

Esempio:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
(Usa l'alfabeto inglese con 26 lettere!)
*/

function findMissingLetter(array){

    let sup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const isUpper = array[0] == array[0].toUpperCase();

    sup = isUpper ? sup : sup.toLowerCase();

    const start = sup.indexOf(array[0]);

    for (let i = 0; i < array.length; i++) {
        if(array[i] !== sup[start + i]){
            return sup[start + i];
        }
    }
        
}


console.log(findMissingLetter(['a','b','c','d','f']));
console.log(findMissingLetter(['O','Q','R','S']));
