/*
Le parole più frequentemente utilizzate in un testo
Scrivi una funzione che, data una stringa di testo (possibilmente con punteggiatura e interruzioni di riga), restituisca un array delle 3 parole più ricorrenti, in ordine decrescente in base al numero di occorrenze.
Ipotesi:
Una parola è una stringa di lettere (dalla A alla Z) che può contenere uno o più apostrofi ( ') in ASCII.
Gli apostrofi possono apparire all'inizio, al centro o alla fine di una parola ( 'abc, abc', 'abc', ab'csono tutti validi)
Tutti gli altri caratteri (ad esempio #, \, /, ....) non fanno parte di una parola e devono essere trattati come spazi vuoti.
Le corrispondenze non devono fare distinzione tra maiuscole e minuscole e le parole nel risultato devono essere in minuscolo.
I pareggi possono essere risolti arbitrariamente.
Se un testo contiene meno di tre parole univoche, devono essere restituite le prime 2 o la prima parola oppure un array vuoto se il testo non contiene parole.
Esempi:
"In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income."

--> ["a", "of", "on"]


"e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"

--> ["e", "ddd", "aa"]


"  //wont won't won't"

--> ["won't", "wont"]
Punti bonus (non proprio, ma solo per divertimento):
Evitare di creare un array la cui occupazione di memoria sia approssimativamente pari a quella del testo di input.
Evitare di ordinare l'intera serie di parole univoche
*/

function topThreeWords(text) {
    const warning = ['#','\\','/','.',',',':', '[',']'];
    let myText = text.trim().toLowerCase();
    
    for (let i = 0; i < myText.length; i++) {
        for (let j = 0; j < warning.length; j++) {
            if (myText[i] === warning[j]){
                myText = myText.replace(warning[j], ' ')
            }
        }
    }
    let arr = myText.split(" ");
    arr = arr.filter((i)=> i.length !== 0)
    arr = arr.filter(word => word.replace(/'/g, '').length > 0);

    let count = []
    for (const i of arr) {
        let find = count.find((element)=> element[0] === i);
        if (!find){
            count.push([i, 0])
        }
        
        for (const j of count) {
            if (i === j[0]){
                j[1]++;
            }
        }
    }
    
    for (let i = 0; i < count.length; i++) {
        for (let j = i+1; j < count.length; j++) {
            tmp = 0;
            if (count[j][1] >= count[i][1]){
                tmp = count[i];
                count[i] = count[j]
                count[j] = tmp;
            }
        }
    }
    
    let res = count.map((e)=> {
        return e[0]
    })

    return res.slice(0,3)
}

console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"));
console.log(topThreeWords("  //wont won't won't"))
console.log(topThreeWords("[ '\'' ]"));

/*codice migliorato */

function topThreeWords(text) {
    // Convertiamo tutto in minuscolo
    text = text.toLowerCase();

    // Rimuoviamo caratteri non alfabetici, tranne gli apostrofi nelle parole
    text = text.replace(/[^a-z']+/g, ' ');

    // Rimuoviamo parole composte solo da apostrofi
    let words = text.match(/\b[a-z']+\b/g) || [];
    words = words.filter(word => word.replace(/'/g, '').length > 0);

    // Conta le parole in un oggetto
    let wordCount = {};
    for (let word of words) {
        wordCount[word] = (wordCount[word] || 0) + 1;
    }
    
    // Ordina le parole per occorrenza e prende le prime 3
    return Object.entries(wordCount)
        .sort((a, b) => b[1] - a[1]) // Ordina per conteggio decrescente
        .slice(0, 3) // Prendi le prime 3 parole
        .map(([word]) => word); // Estrai solo la parola
}

// ✅ Test
console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")); // ["e", "ddd", "aa"]
console.log(topThreeWords("  //wont won't won't")); // ["won't", "wont"]
console.log(topThreeWords("[ '\'' ]")); // []
console.log(topThreeWords("a a a b b b c c d d d d d d d")); // ["d", "a", "b"]
console.log(topThreeWords("Hello world! Hello again, world.")); // ["hello", "world", "again"]
