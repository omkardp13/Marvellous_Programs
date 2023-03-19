
var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});



readline.question("Enter First Number: ",(No1:number)=>
{ 

readline.question("Enter Second Number: ",(No2:number)=>
{	readline.question("Enter Third Number: ",(No3:number)=>
{
	var iRet:number=Display(No1,No2,No3);
	console.log("Maximum Number is: "+iRet);
	readline.close();
})})});


function Display(No1:number,No2:number,No3:number):number
{
	if(No1>No2 && No1>No3)
	{
		return No1;
	}
	else if(No2>No1 && No2>No3)
	{
		return No2;
	}
	else
	{
		return No3;
	}
	
}