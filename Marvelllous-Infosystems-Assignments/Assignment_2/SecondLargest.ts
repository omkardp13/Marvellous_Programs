
function SecondLargestFromArray(Arr:number[]):number
{
	let MaxElement:number=Arr[0];
	let SecondMaxElement:number=Arr[0];
	for(var i:number=1;i<Arr.length;i++)
	{
		if(MaxElement<Arr[i])
		{	
			MaxElement=Arr[i];		
		}
		else if(SecondMaxElement<Arr[i] && SecondMaxElement<MaxElement)
		{
			SecondMaxElement=Arr[i];
		}
	}
	return SecondMaxElement;
}


var arr:number[]=[23,89,6,29,56,45,77,32];

var iRet:number=SecondLargestFromArray(arr)

console.log("Maximum Element Of Array: "+iRet);

