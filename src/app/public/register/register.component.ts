import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {UserService} from "../../../core/services/http/user/user.service";
import {catchError, of, switchMap} from "rxjs";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private builder: FormBuilder, private service: UserService, private router: Router,
              private toastr: ToastrService) {

  }

  registerform = this.builder.group({
    name: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.compose([Validators.required])),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
  });
  proceedregister() {
    if (this.registerform.valid) {
      this.service.RegisterUser(this.registerform.value).pipe(
        switchMap( (result: any) => {
          if (result.value){
            this.toastr.success('Now please login to acces account','Registered successfully')
            this.router.navigate(['login'])
          } else {
            this.toastr.error("The was an error, please try again or contact admin.")
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
