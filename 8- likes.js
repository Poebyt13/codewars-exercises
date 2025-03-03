/*
Probabilmente conoscete il sistema "mi piace" di Facebook e altre pagine. Le persone possono mettere "mi piace" a post di blog, immagini o altri elementi. Vogliamo creare il testo che dovrebbe essere visualizzato accanto a tale elemento.

Implementa la funzione che accetta un array contenente i nomi delle persone a cui piace un articolo. Deve restituire il testo visualizzato come mostrato negli esempi:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Nota: per 4 o più nomi, il numero "and 2 others"semplicemente aumenta.
*/

function likes(names) {
    switch (names.length) {
        case 0: return "no one likes this";
        case 1: return `${names[0]} likes this`;
        case 2: return `${names[0]} and ${names[1]} like this`;
        case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`;
        default: return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }
}

console.log(likes([]))
console.log(likes(["Peter"]))
console.log(likes(["Jacob", "Alex"]))
console.log(likes(["Max", "John", "Mark"] ))
console.log(likes(["Alex", "Jacob", "Mark", "Max"]))
