

class Arithmatic
{
   No1:number;
   No2:number;
   Ans:number;
   
   constructor(A:number,B:number)
   {
	   this.No1=A;
	   this.No2=B;
	   this.Ans=0;
   }
   
   Addition():number
   {
	 	   
	   this.Ans=this.No1+this.No2;
	   
	   return this.Ans;
   }
   
   Substraction():number
   {
	     
	   this.Ans=this.No1-this.No2;
	   
	   return this.Ans;
   }
   
   Multiplication():number
   {
	     
	   this.Ans=this.No1 * this.No2;
	   
	   return this.Ans;
   }
   
   Division():number
   {
	     
	   this.Ans=this.No1/this.No2;
	   
	   return this.Ans;
   }
   
}

var Ret:number=0;
var ObjA=new Arithmatic(11,10);
Ret=ObjA.Addition();
console.log("Addition of ObjA is : "+Ret);
Ret=ObjA.Substraction();
console.log("Substraction of ObjA is : "+Ret);
Ret=ObjA.Multiplication();
console.log("Multiplication of ObjA is : "+Ret);
Ret=ObjA.Division();
console.log("Division of ObjA is : "+Ret);
console.log("-------------------------------------")
var ObjB=new Arithmatic(30,10);
Ret=ObjB.Addition();
console.log("Addition of ObjB is : "+Ret);
Ret=ObjB.Substraction();
console.log("Substraction of ObjB is : "+Ret);
Ret=ObjB.Multiplication();
console.log("Multiplication of ObjB is : "+Ret);
Ret=ObjB.Division();
console.log("Division of ObjB is : "+Ret);