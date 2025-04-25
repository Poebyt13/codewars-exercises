/*
Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]

*/

function towerBuilder(nFloors) {
    const numsOfStars = nFloors * 2 - 1;
    let tower = [];
    for (let i = numsOfStars; i >= 0; i = i - 2) {
        const spaces = (numsOfStars - i) / 2;
        const stars = i;
        tower.push(" ".repeat(spaces) + "*".repeat(stars) + " ".repeat(spaces));
    }
    return tower.reverse();
}

function towerBuilder(nFloors) {
    let tower = [];

    for (let i = 0; i < nFloors; i++) {
        const stars = "*".repeat(2 * i + 1); // numero di stelle aumenta di 2 ogni piano
        const spaces = " ".repeat(nFloors - i - 1); // spazi ai lati per centrare la riga
        tower.push(spaces + stars + spaces);
    }

    return tower;
}


console.log(towerBuilder(3)); // ["  *  ", " *** ", "*****"]