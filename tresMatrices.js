let arrOfEvens = [2, 4, 6, 8, 10];
let arrOfOdds = [1, 3, 5, 7, 9];
let arrOfSums = [];

for (let i = 0; i < arrOfEvens.length; i++) {
    arrOfSums.push(arrOfEvens[i] + arrOfOdds[i]);
}

console.log(arrOfSums); // [3, 7, 11, 15, 19]
