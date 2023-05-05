import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title = 'PR';

  signupForm = new FormGroup
  ( {
        firstname:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z]+$/)]),

        lastname:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z]+$/)]),

        email:new FormControl('',[Validators.required,Validators.email]),

        phone:new FormControl('',[Validators.required,Validators.pattern(/^[0-9]{10}$/)]),

        city:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]{4,}')]),

        state:new FormControl('',[Validators.required]),

        zipcode:new FormControl('',[Validators.required,Validators.pattern(/^[0-9]{5}$/)]),

        comment:new FormControl('',[Validators.required,Validators.minLength(30)])

  } )

  handleSubmit()
  {
    console.log(this.signupForm.value);
  }
  
  get f()
  {
    return this.signupForm.controls;
  }
}
