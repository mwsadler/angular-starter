import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {UserService} from "../../../core/services/http/user/user.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {LoginModel} from "../../../core/services/http/user/models/login.model";
import {catchError, of, switchMap} from "rxjs";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  constructor(private builder: FormBuilder, private toastr: ToastrService, private service: UserService ,
              private router: Router) {
    sessionStorage.clear();

  }
  result: any;

  loginform = this.builder.group({
    email: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required)
  });

  proceedlogin() {
    if (this.loginform.valid) {
      var loginInfo: LoginModel = {
        email: this.loginform.value.email as string,
        password: this.loginform.value.password as string
      }
      this.service.validateUserCrendential(loginInfo).pipe(
        switchMap( (isValidated: any) => {
          if (isValidated.isValidUser) {
            sessionStorage.setItem('username',loginInfo.email);
            this.router.navigate(['stock']);
          } else {
            this.toastr.error('Invalid credentials');
          }
          return of(true)
        }),
        catchError(error => {
          console.log(error);
          this.toastr.error('The was an unknown error with the server');
          return of(false);
        })
      ).subscribe();
    } else {
      this.toastr.warning('Please enter valid data.')
    }
  }
}
