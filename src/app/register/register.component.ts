import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
  });
  }
  get f() { return this.registerForm.controls; }
   currentPassword(){
    let currentPassword = this.registerForm.controls["password"].value;
  }
  confirmPassword(){
    let confirmPassword = this.registerForm.controls["confirmPassword"].value;
  }
  onSubmit() {
    let details = { // grabbing the value from the input fields
      firstName: this.registerForm.controls['firstName'].value,
      lastName: this.registerForm.controls['lastName'].value,
      email: this.registerForm.controls['email'].value + "@inmar.com",
      password: this.registerForm.controls['password'].value,     
      confirmPassword: this.registerForm.controls['confirmPassword'].value
    };
    this.submitted = true;
    console.log(details);
     // stop here if form is invalid
     if (this.registerForm.invalid) {
         return;
     }
     if(details.password == details.confirmPassword ){
       localStorage.setItem("userDetails" , JSON.stringify(details));
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
    }else{
      alert("passworn mis match");
    }     
  }
}
