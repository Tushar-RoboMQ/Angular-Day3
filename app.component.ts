import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerform: FormGroup;
  submitted = false;
  invalidlogin = false;

  constructor(private formBuilder: FormBuilder, private router: Router) { }
  onSubmit()
  {
    this.submitted = true;
    if ( this.registerform.invalid)
    {
      return;
    }
    if(this.registerform.controls.email.value === 'divyaSharma@jklu.in' && this.registerform.controls.password.value === "pass"){
      console.log(' Valid ');
      this.router.navigate(['login']);

    }
    else {
      this.invalidlogin = true;
    }

  }

  ngOnInit() {
    this.registerform = this.formBuilder.group({
      name: ['', [Validators.required,Validators.pattern('^[a-zA-Z ]*$')]],
      id: ['', Validators.required],
      number: ['', [Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]]
    });
  }
}
