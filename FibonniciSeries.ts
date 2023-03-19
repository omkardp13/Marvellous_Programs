
var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});



readline.question("Enter Number: ",(number)=>
{ 

    FibonniciSeries(number);
	 
	readline.close();
});


function FibonniciSeries(No1:number):void
{
	var FirstTerm:number=0;
	var SecondTerm:number=1
	var ThirdTerm:number=0;
	
	console.log(FirstTerm);
	console.log(SecondTerm);
	   
	while(ThirdTerm!=No1)
	{
	    ThirdTerm=FirstTerm+SecondTerm;
       console.log(ThirdTerm);
	   
	   FirstTerm=SecondTerm;
	   SecondTerm=ThirdTerm;
	}
	
}