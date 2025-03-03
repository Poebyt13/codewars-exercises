/*
Ti verrà dato un array di numeri interi. Il tuo compito è prendere quell'array e trovare un indice N in cui la somma degli interi a sinistra di N è uguale alla somma degli interi a destra di N.

Se non esiste un indice che consenta di ottenere ciò, restituisci -1.

Per esempio:
Supponiamo che ti venga fornito l'array {1,2,3,4,3,2,1}:
la tua funzione restituirà l'indice 3, perché nella terza posizione dell'array, la somma del lato sinistro dell'indice ( {1,2,3}) e la somma del lato destro dell'indice ( {3,2,1}) sono entrambe uguali 6.

Diamo un'occhiata a un altro.
Ti viene dato l'array {1,100,50,-51,1,1}:
La tua funzione restituirà l'indice 1, perché nella prima posizione dell'array, la somma del lato sinistro dell'indice ( {1}) e la somma del lato destro dell'indice ( {50,-51,1,1}) sono entrambe uguali 1.

Ultimo:
ti viene dato l'array. {20,10,-80,10,10,15,35}
All'indice 0 il lato sinistro è. {}
Il lato destro è. {10,-80,10,10,15,35}
Entrambi sono uguali a 0quando vengono sommati. (In questo problema, gli array vuoti sono uguali a 0).
L'indice 0 è il punto in cui il lato sinistro e il lato destro sono uguali.

Nota: tieni presente che nella maggior parte dei linguaggi l'indice di un array inizia da 0.

Ingresso
Un array di numeri interi di lunghezza 0 < arr < 1000. I numeri nell'array possono essere qualsiasi numero intero positivo o negativo.

Produzione
L'indice più basso Nin cui il lato a sinistra di Nè uguale al lato a destra di N. Se non trovi un indice che soddisfi queste regole, allora restituirai -1.

Nota
Se ti viene fornito un array con più risposte, restituisci l'indice corretto più basso.

*/

function findEvenIndex(arr) {

	const sum = (lista)=>{
		let res = 0;
		for (const el of lista) {
			res += el;
		}
		return res;
	}

  	for (let i = 0; i < arr.length; i++) {
		//console.log("sinisto: " + arr.slice(0, i) + " destra: " + arr.slice(i+1, arr.length));
		//console.log("somma sx: " + sum(arr.slice(0, i)) + " somma dx: " + sum(arr.slice(i+1, arr.length)));
		if (sum(arr.slice(0,i)) === sum(arr.slice(i+1, arr.length))){
			return i;
		}
	}
	return -1;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]) + "\n");
console.log(findEvenIndex([1,100,50,-51,1,1])+ "\n");
console.log(findEvenIndex([20,10,-80,10,10,15,35]));
