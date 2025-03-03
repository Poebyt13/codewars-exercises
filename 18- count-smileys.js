/*
Conta le faccine sorridenti!
Dato un array (arr) come argomento, completare la funzione countSmileysche dovrebbe restituire il numero totale di volti sorridenti.

Regole per un viso sorridente:

Ogni faccina sorridente deve contenere un paio di occhi valido. Gli occhi possono essere contrassegnati come :o;
Una faccina sorridente può avere un naso, ma non è obbligatorio. I caratteri validi per un naso sono -o~
Ogni volto sorridente deve avere una bocca sorridente che dovrebbe essere contrassegnata con )oD
Non sono ammessi caratteri aggiuntivi oltre a quelli menzionati.

Esempi di faccine sorridenti valide: :) :D ;-D :~)
Faccine sorridenti non valide: ;( :> :} :]

Esempio
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
Nota
In caso di array vuoto restituisci 0. Non verrai testato con input non valido (l'input sarà sempre un array). L'ordine degli elementi del viso (occhi, naso, bocca) sarà sempre lo stesso.
*/

//return the total number of smiling faces in the array
function countSmileys(arr) {

    let count = arr.filter((i)=>{
        if (
            ( ((i.includes(':') || i.includes(';')) && (i.includes('D') || i.includes(')'))) 
            && !(i.includes('_') || i.includes('o'))) 
            && i.length <= 3 ){
            return true;
        }
        
        return false;
    })
    return count.length;
}

console.log(countSmileys([':)', ';(', ';}', ':-D']));       //2
console.log(countSmileys([';D', ':-(', ':-)', ';~)']));     //3
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));     //1
console.log(countSmileys([":-)" , ";~D" , ":-D" , ":_D"]));     //3
console.log(countSmileys([";~(" , ";)" , ":(" , ";o(" , ":-D" , ":oD" , ":>"]));        //2
console.log(countSmileys([":---)" , "))" , ";~~D" , ";D"]));    //1
