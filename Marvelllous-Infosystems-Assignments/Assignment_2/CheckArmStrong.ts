

function CheckArmstrongNumber(No:number):boolean
{
      var Temp:number=No;
      var Res:number=0;
	  var Ans:number=0;
	  while(Temp!=0)
	  {
		  Res=Temp%10;
		  Ans=Ans+(Res*Res*Res);
		  Temp=Math.floor(Temp/10);
	  }
	  if(No==Ans)
		  return true;
	  else
		  return false;
	  
}


var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


readline.question("Enter Number: ",(number)=>
{ 

	var iRet:boolean=CheckArmstrongNumber(number);
	if(iRet)
	{
		console.log("Number is Armstrong");
	}
	else
	{
		console.log("Number is Not Armstrong");
	}
	readline.close();
});


