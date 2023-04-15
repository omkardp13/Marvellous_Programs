import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{

  public name="";
  onInput(event: Event) {
    const value = (event.target as HTMLInputElement)?.value;
    this.name=value;
  }
}
