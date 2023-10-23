import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import {RouterOutlet} from "@angular/router";
import { LoginPageComponent } from './login-page/login-page.component';
import {PublicComponent} from "./public.component";
import {MaterialModule} from "../material.module";
import {ReactiveFormsModule} from "@angular/forms";
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    PublicComponent,
    LoginPageComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    RouterOutlet,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    PublicComponent
  ]
})
export class PublicModule { }
