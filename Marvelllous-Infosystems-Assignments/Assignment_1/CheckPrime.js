var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question("Enter Number: ", function (number) {
    var iRet = CheckPrime(number);
    if (iRet) {
        console.log("Number is Prime Number");
    }
    else {
        console.log("Number is Not Prime Number");
    }
    readline.close();
});
function CheckPrime(No1) {
    var isPrime = true;
    for (var i = 2; i <= No1 / 2; i++) {
        if (No1 % i == 0) {
            return false;
        }
    }
    return true;
}
