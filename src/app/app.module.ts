import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {InvestmentSectionModule} from "./pages/investion-section/investment-section.module";
import { AppRoutingModule } from './app-routing.module';
import {RouterOutlet} from "@angular/router";
import {PublicModule} from "./public/public.module";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { InvestmentSectionRoutingModule } from './pages/investion-section/investment-section-routing.module';
import {ToastrModule} from "ngx-toastr";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterOutlet,
        InvestmentSectionModule,
        PublicModule,
        ToastrModule.forRoot(),
        InvestmentSectionRoutingModule,
        AppRoutingModule,


    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
