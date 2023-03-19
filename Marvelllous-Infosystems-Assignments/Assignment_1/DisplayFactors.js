var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question("Enter Number: ", function (number) {
    DisplayFactors(number);
    readline.close();
});
function DisplayFactors(No1) {
    for (var i = 0; i <= No1 / 2; i++) {
        if (No1 % i == 0) {
            console.log(i);
        }
    }
}
