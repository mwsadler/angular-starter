import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "../../../core/services/auth/auth.guard";
import {TableSectionComponent} from "./table-section/table-section.component";
import {InvestionSectionComponent} from "./investion-section.component";
import {ManageStockSectionComponent} from "./manage-stock-section/manage-stock-section.component";
import {GraphicSectionComponent} from "./graphic-section/graphic-section.component";

const routes: Routes = [
  {
    path: '',
    component: InvestionSectionComponent,
    canActivate:[AuthGuard],
    children: [
      {
        path: 'stock',
        component: TableSectionComponent,
        canActivate:[AuthGuard],

      },
      {
        path: 'input',
        component: ManageStockSectionComponent,
        canActivate:[AuthGuard],

      },
      {
        path: 'graphic',
        component: GraphicSectionComponent,
        canActivate:[AuthGuard],

      },
    ]
  },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestmentSectionRoutingModule { }
