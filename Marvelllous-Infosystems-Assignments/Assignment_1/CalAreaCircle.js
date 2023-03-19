var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question("Enter Radius Of Circle: ", function (number) {
    var iRet = CalAreaCicle(number);
    console.log("Area Of Circle: " + iRet);
    readline.close();
});
function CalAreaCicle(No1) {
    return 3.14 * No1 * No1;
}
