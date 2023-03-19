
function MaximumArray(Arr:number[]):number
{
	let MaxElement:number=Arr[0];
	for(var i:number=1;i<Arr.length;i++)
	{
		if(MaxElement<Arr[i])
		{
			MaxElement=Arr[i];
		}
	}
	return MaxElement;
}


var arr:number[]=[23,89,6,29,56,45,77,32];

var iRet:number=MaximumArray(arr)

console.log("Maximum Element Of Array: "+iRet);

