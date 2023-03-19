
var arr:number[]=[23,6,7,4,5,7];

var sum:number=AdditionArray(arr)
console.log("Addition Of Array: "+sum);

function AdditionArray(Arr:number[]):number
{
	let Sum:number=0;
	for(var i:number=0;i<Arr.length;i++)
	{
		Sum=Sum+Arr[i];
	}
	return Sum;
}