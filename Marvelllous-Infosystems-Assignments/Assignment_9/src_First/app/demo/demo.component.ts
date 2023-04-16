import { Component, OnInit } from '@angular/core';
import { ArithmaticService } from '../arithmatic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent
{
     public AdditionIs;
     public SubstractionIs;

   constructor(public obj:ArithmaticService)
   {
        this.AdditionIs=this.obj.DoAddition(30,20);
        this.SubstractionIs=this.obj.DoSubstraction(30,10);
   }

}
