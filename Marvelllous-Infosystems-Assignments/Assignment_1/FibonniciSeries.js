var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question("Enter Number: ", function (number) {
    FibonniciSeries(number);
    readline.close();
});
function FibonniciSeries(No1) {
    var FirstTerm = 0;
    var SecondTerm = 1;
    var ThirdTerm = 0;
    console.log(FirstTerm);
    console.log(SecondTerm);
    while (ThirdTerm != No1) {
        ThirdTerm = FirstTerm + SecondTerm;
        console.log(ThirdTerm);
        FirstTerm = SecondTerm;
        SecondTerm = ThirdTerm;
    }
}
