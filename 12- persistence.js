/*
Scrivi una funzione, persistence, che accetti un parametro positivo nume restituisca la sua persistenza moltiplicativa, ovvero il numero di volte in cui devi moltiplicare le cifre numfino a raggiungere una singola cifra.

Ad esempio (Input --> Output) :

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
4 --> 0 (because 4 is already a one-digit number, there is no multiplication)
*/

function persistence(num) {

    let con = 0;
    
    while(num >= 10){
        sup = 1;
        for (const numero of num.toString()) {
            sup *= parseInt(numero)
        }
        num = sup;
        con++;
    }

    return con;
}

console.log(persistence(1))
console.log(persistence(39))
console.log(persistence(999))
console.log(persistence(4))