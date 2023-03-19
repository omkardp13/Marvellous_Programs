
var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


readline.question("Enter Radius Of Circle: ",(number)=>
{ 

	var iRet:number=CalAreaCicle(number);
	console.log("Area Of Circle: "+iRet);
	readline.close();
});


function CalAreaCicle(No1:number):number
{
	return 3.14*No1*No1;
	
}