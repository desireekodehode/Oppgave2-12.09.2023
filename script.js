



let randomNumberGenerator = Math.round(Math.random()* 19) + 1;
if (randomNumberGenerator >10) {
    console.log("Tallet er større enn 10");
} else {
    console.log("Tallet er 5");
}
console.log (`Tallet er: ${randomNumberGenerator}`);

function getRandomNumberGenerator (maxNumber) {
    return Math.round(Math.random()* maxNumber) + 1;
}

console.log()

