

function CheckString(Str:string):boolean
{
      var StrArr:String[]=Str.split(' ');
	  for(var i:number=0;i<StrArr.length;i++)
	  {
		  if(StrArr[i]=="Marvellous")
			  return true;
	  }
	  
	  return false;
}



var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


readline.question("Enter String: ",(string)=>
{ 

	var iRet:boolean=CheckString(string);
	
	if(iRet)
	{
		console.log("String Contains Marvellous In It");
	}
	else
	{
		console.log("String Does Not Contains Marvellous In It");
	}
	
	readline.close();
});


