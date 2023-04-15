import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent
{
   public name:string="";

   @Output() public Myevent=new EventEmitter();

   public Bind()
   {
           this.Myevent.emit(this.name);
   }
}
