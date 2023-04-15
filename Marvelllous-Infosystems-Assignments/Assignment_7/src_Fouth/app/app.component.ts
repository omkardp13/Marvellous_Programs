import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
 
  public Name="Marvellous Infosystem";
  public MakeLower()
  {
    this.Name=this.Name.toLowerCase();
  }

  public MakeUpper()
  {
    this.Name=this.Name.toUpperCase();
  }

}
