import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousCheck'
})
export class MarvellousCheckPipe implements PipeTransform {

  transform(value: number, ...args: string[]): string {
    
    switch(args[0])
    {
      case "Even" :
      {
              if(value %2 ==0)
              {
                 return "Number is even number";
              }
              else
              {
                return "Number is odd number";
              }
               break;
       }
       case "Perfect" :
      {
           let temp=value/2;
           let sum=0;
            for(var i:number=1;i<=temp;i++)
            {
                 if(value%i==0)
                    sum=sum+i;
            }
            if(sum==value)
            {
                return "Number is perfect number";
            }
            else
            {
              return "Number is not perfect number";
            }
               break;
       }

       case "Prime" :
      {
        
        let temp=value/2;
        let isPrime=false;
         for(var i:number=2;i<=temp;i++)
         {
              if(value%i==0)
              {
                isPrime=true;
                break;
              }
                
         }
         if(!isPrime)
         {
             return "Number is prime number";
         }
         else
         {
           return "Number is not prime number";
         }
               break;
       }


    }
    return "";
  }

}
