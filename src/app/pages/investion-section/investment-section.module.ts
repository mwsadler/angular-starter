import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InvestionSectionComponent} from "./investion-section.component";
import {SeeInvestmentsComponent} from "./table-section/tabs/see-investments/see-investments.component";
import {HttpClientModule} from "@angular/common/http";
import {MaterialModule} from "../../material.module";
import {FormsModule} from "@angular/forms";
import { TestTabComponent } from './manage-stock-section/tabs/test-tab/test-tab.component';
import { InputStockComponent } from './manage-stock-section/tabs/input-stock/input-stock.component';
import { OverallInvestmentsComponent } from './table-section/tabs/overall-investments/overall-investments.component';
import { TableSectionComponent } from './table-section/table-section.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import { ManageStockSectionComponent } from './manage-stock-section/manage-stock-section.component';
import { GraphicSectionComponent } from './graphic-section/graphic-section.component';
import { TimelineChartComponent } from './graphic-section/tabs/timeline-chart/timeline-chart.component';
import {HighchartsChartModule} from "highcharts-angular";



@NgModule({
  declarations: [
    InvestionSectionComponent,
    SeeInvestmentsComponent,
    TestTabComponent,
    InputStockComponent,
    OverallInvestmentsComponent,
    TableSectionComponent,
    ManageStockSectionComponent,
    GraphicSectionComponent,
    TimelineChartComponent,
  ],
  exports: [
    InvestionSectionComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    RouterOutlet,
    RouterLink,
    HighchartsChartModule
  ]
})
export class InvestmentSectionModule { }
