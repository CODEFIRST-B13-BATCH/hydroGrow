import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule, MatCardModule, FormsModule, MatFormFieldModule, MatInputModule, FormsModule,
    MatFormFieldModule, MatInputModule, MatIconModule, MatFormFieldModule, MatInputModule, MatButtonModule,
    MatIconModule, MatFormFieldModule, MatSelectModule,],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  [x: string]: any;

  userData = {
    fullName: "",
    phoneNo: "",
    password: "",
    confirmPassword: "",
    role: "",
  }
  constructor(private router:Router){}


  hidePassword = true;
  hideConfirmPassword = true;

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  loginPage(){
    this.router.navigate(['']);
  }
  

  onSubmit(form: any) {
    let enteredPhoneNo = this.userData.phoneNo;
    let existingUsers = JSON.parse(localStorage.getItem("information") || "[]");
    let numberValidator = existingUsers.find((existingUsers: any) =>
      enteredPhoneNo === existingUsers.phoneNo
    );
    if (numberValidator) {
      alert("this number alread exist")
    } else {
      if (this.userData.password === this.userData.confirmPassword) {

        existingUsers.push({ ...this.userData });
        localStorage.setItem("information", JSON.stringify(existingUsers));
        alert("Account created");
        // redirect to login page
         this.router.navigate([''])
        
      }
      else {
        alert("password does not match")
      }
    }
  }
}