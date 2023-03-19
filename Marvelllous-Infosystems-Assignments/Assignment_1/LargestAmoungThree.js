var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question("Enter First Number: ", function (No1) {
    readline.question("Enter Second Number: ", function (No2) {
        readline.question("Enter Third Number: ", function (No3) {
            var iRet = Display(No1, No2, No3);
            console.log("Maximum Number is: " + iRet);
            readline.close();
        });
    });
});
function Display(No1, No2, No3) {
    if (No1 > No2 && No1 > No3) {
        return No1;
    }
    else if (No2 > No1 && No2 > No3) {
        return No2;
    }
    else {
        return No3;
    }
}
