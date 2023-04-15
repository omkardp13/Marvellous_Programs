import { Component, Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent
{
    @Input() public MessageFromParent="";
    @Output() public Myevent=new EventEmitter();
   
    public SendMessage()
    {
     this.Myevent.emit("Hello Parent Component");
    }
    
  
}
