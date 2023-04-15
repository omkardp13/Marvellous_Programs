import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
 
  public Name="Marvellous Infosystem";
  public DisplayName()
  {
    this.Name= "Educating For Better Tomarrow";
  }

}
