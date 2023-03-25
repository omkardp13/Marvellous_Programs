
class Circle
{
	Radius:number;
	PI:number;
	
	constructor(Data : number)
	{
		this.Radius=Data;
		this.PI=3.14;
	}
	
	CalculateArea():number
	{
		let Ans:number=0;
		Ans=this.PI*this.Radius*this.Radius;
		return Ans;
	}
	
}

class CircleX extends Circle
{
	
	constructor(data:number)
	{
		
		super(data);
	}
	
	CalculateCircumfarance():number
	{
	  let Ans:number=0;
	  Ans=2*this.PI*this.Radius;
	  return Ans;
	}
}

var Ret:number=0;
var obj1=new CircleX(14.9);
Ret=obj1.CalculateArea();
console.log("Area of obj1 is : "+Ret);
Ret=obj1.CalculateCircumfarance();
console.log("Circumfarance of obj1 is : "+Ret);
console.log("----------------------------");
var obj2=new CircleX(17.2);
Ret=obj2.CalculateArea();
console.log("Area of obj2 is : "+Ret);
Ret=obj2.CalculateCircumfarance();
console.log("Circumfarance of obj2 is : "+Ret);