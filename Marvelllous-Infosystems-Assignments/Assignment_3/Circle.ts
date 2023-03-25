
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




var Ret:number=0;

var obj1=new Circle(11.8);
Ret=obj1.CalculateArea();
console.log("Area of obj1 is : "+Ret);
console.log("----------------------------");
var obj2=new Circle(15);
Ret=obj2.CalculateArea();
console.log("Area of obj2 is : "+Ret);
