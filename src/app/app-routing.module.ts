import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: 'public',
    loadChildren:  () => import('./public/public-routing.module').then((m)=>m.PublicRoutingModule)
  },
  {
    path: 'stock',
    loadChildren:  () => import('./pages/investion-section/investment-section-routing.module').then((m)=>m.InvestmentSectionRoutingModule)
  },
  {
    path: '**',
    redirectTo:'public'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
