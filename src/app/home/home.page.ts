import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', Validators.email],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', Validators.required]
  });

  saveData(){
   console.log(this.user.value);
 }

  rename(){
    this.user.controls.name.setValue('Ornitorrinco');
  }

  constructor(private fb: FormBuilder) {

  }

}
