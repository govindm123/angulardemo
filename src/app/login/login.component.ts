import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  invalidLogin: boolean = false;
  constructor(
    private formBuilder: FormBuilder, 
    private router: Router
    ) { }
    onSubmit() {
      if (this.loginForm.invalid) {
        return;
      }
      const loginPayload = {
        username: this.loginForm.controls.username.value,
        password: this.loginForm.controls.password.value
      }
      console.log(loginPayload);
         
        if( loginPayload.username === "admin") {
         // window.localStorage.setItem('token', data.result.token);
          this.router.navigate(['list-user']);
        }else {
          this.invalidLogin = true;
          //alert(data.message);
        } 
    }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }
}
