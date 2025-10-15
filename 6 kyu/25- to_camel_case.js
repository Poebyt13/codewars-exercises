/*
Completa il metodo/funzione in modo che converta le parole delimitate da trattino/sottolineatura in camel case . La prima parola nell'output dovrebbe essere in maiuscolo solo se la parola originale era in maiuscolo (noto come Upper Camel Case, spesso indicato anche come Pascal case). Le parole successive dovrebbero essere sempre in maiuscolo.

Esempi
"the-stealth-warrior"viene convertito in"theStealthWarrior"

"The_Stealth_Warrior"viene convertito in"TheStealthWarrior"

"The_Stealth-Warrior"viene convertito in"TheStealthWarrior"


*/

function toCamelCase(str){
    let mystr = ""
    for (let i = 0; i < str.length; i++) {
        if(str[i] !== "-" && str[i] !== "_"){
            mystr += str[i]
        } else {
            i++;
            mystr += str[i].toUpperCase() 
        }
        
    }
    return mystr;
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase("The_Stealth-Warrior"));