/**
 * 
 * C'era una volta, lungo un cammino attraverso il vecchio e selvaggio West montuoso ,...
… a un uomo vennero date delle indicazioni per andare da un punto a un altro. Le indicazioni erano "NORD", "SUD", "OVEST", "EST". Chiaramente "NORD" e "SUD" sono opposti, così come "OVEST" e "EST".

Andare in una direzione e tornare subito indietro nella direzione opposta è uno sforzo inutile. Dal momento che questo è il selvaggio West, con un clima terribile e poca acqua, è importante risparmiare un po' di energia, altrimenti potresti morire di sete!

Come ho attraversato un deserto montuoso nel modo più intelligente.
Le istruzioni date all'uomo sono, ad esempio, le seguenti (a seconda della lingua):

["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
or
{ "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
or
[North, South, South, East, West, North, West]
Si può vedere immediatamente che andare "a NORD" e subito "a SUD" non è ragionevole, meglio restare nello stesso posto! Quindi il compito è di dare all'uomo una versione semplificata del piano. Un piano migliore in questo caso è semplicemente:

["WEST"]
or
{ "WEST" }
or
[West]
Altri esempi:
In ["NORTH", "SOUTH", "EAST", "WEST"], la direzione "NORTH" + "SOUTH"è verso nord e torna subito indietro .

Il percorso diventa ["EAST", "WEST"], ora "EAST"e "WEST"si annientano a vicenda, quindi il risultato finale è [](nil in Clojure).

In ["NORD", "EST", "OVEST", "SUD", "OVEST", "OVEST"], "NORD" e "SUD" non sono direttamente opposti, ma lo diventano dopo la riduzione di "EST" e "OVEST", quindi l'intero percorso è riducibile a ["OVEST", "OVEST"].

Compito
Scrivere una funzione dirReducche prenda un array di stringhe e restituisca un array di stringhe da cui siano state rimosse le direzioni non necessarie (W<->E o S<->N affiancate ).

La versione Haskell accetta un elenco di direzioni con data Direction = North | East | West | South.
La versione Clojure restituisce nil quando il percorso si riduce a zero.
La versione Rust occupa una fetta di enum Direction {North, East, West, South}.
La versione OCaml accetta un elenco di type direction = | North | South | East | West.
Vedi altri esempi in "Test campione":
Appunti
Non tutti i percorsi possono essere semplificati. Il percorso ["NORTH", "WEST", "SOUTH", "EAST"] non è riducibile. "NORTH" e "WEST", "WEST" e "SOUTH", "SOUTH" e "EAST" non sono direttamente opposti l'uno all'altro e non possono diventarlo. Quindi il percorso risultante è esso stesso: ["NORTH", "WEST", "SOUTH", "EAST"].
Se vuoi tradurre, chiedi prima di farlo.
 */

function dirReduc(arr){

    const equalArrays = (arr1, arr2) => {
        return arr1.length === arr2.length && arr1.every((el, i) => el === arr2[i]);
    }
    const opposti = [["NORTH", "SOUTH"], ["SOUTH", "NORTH"], ["EAST", "WEST"], ["WEST", "EAST"]];
    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < opposti.length; j++) {
            if (equalArrays([arr[i], arr[i+1]], opposti[j])) {
                arr.splice(i, 2);
                i = -1;
                break;
            }
        }
    }
    return arr;
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])); // ["WEST"]
