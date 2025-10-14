/**
 Crea una funzione che accetta come parametro un numero intero positivo compreso tra 1e (entrambi inclusi) e restituisce una stringa contenente la rappresentazione in numeri romani di tale numero intero.3999

I numeri romani moderni si scrivono esprimendo ogni cifra separatamente, iniziando dalla cifra più a sinistra e saltando qualsiasi cifra con valore zero. Non possono esserci più di 3 simboli identici in fila.

In numeri romani:

1990viene renderizzato: 1000= M+ 900= CM+ 90= XC; risultante in MCMXC.
2008è scritto come 2000= MM, 8= VIII; o MMVIII.
1666utilizza ogni simbolo romano in ordine decrescente: MDCLXVI.
Esempio:

   1 -->       "I"
1000 -->       "M"
1666 --> "MDCLXVI"
Aiuto:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
Ulteriori informazioni sui numeri romani
 */

function solution(number) {
  const numeriRomani = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  let roman = "";
  for (let [valore, simbolo] of numeriRomani) {
    while (number >= valore) {
      roman += simbolo;
      number -= valore;
    }
  }

  return roman;
}

console.log(solution(22));
console.log(solution(77));
console.log(solution(1666));
