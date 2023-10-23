import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PublicComponent} from "./public.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegisterComponent} from "./register/register.component";
import {InvestionSectionComponent} from "../pages/investion-section/investion-section.component";

const routes: Routes = [
    {
      path: '',
      component: PublicComponent,
      children: [
        {
          path: '',
          redirectTo: 'login',
          pathMatch: 'full'
        },
        {
          path:'login',
          component: LoginPageComponent
        },
        {
          path:'register',
          component: RegisterComponent
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
