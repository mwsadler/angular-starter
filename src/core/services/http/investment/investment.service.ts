import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AddStockModel} from "./investment/add-stock.model";
import {ValueStringModel} from "./investment/value-string.model";
import {DayPerformanceModel} from "./investment/day-performance.model";
import {HistoricalDataModel} from "./investment/historical-data.model";

const EMAIL: string = 'webersadler.mark@gmail.com';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  url : string;

  constructor(private readonly http: HttpClient) {
    // this.url = "https://fair-blue-fly-hose.cyclic.cloud";
    this.url = "http://127.0.0.1:5000";
  }

  getDayReturn(): Observable<DayPerformanceModel> {
    const email = sessionStorage.getItem('username') ?? "";
    return this.http.get<DayPerformanceModel>(`${this.url}/dayReturn`, {params: {email:email}});
  }

  addStock(data: AddStockModel): Observable<ValueStringModel>{
    const email = sessionStorage.getItem('username') ?? "";
    data.email = email;
    return this.http.post<ValueStringModel>(`${this.url}/addStock`, data);
  }

  checkSymboValidity(symbol: string): Observable<ValueStringModel> {
    return this.http.get<ValueStringModel>(`${this.url}/stockValidity`, {params: {symbol: symbol}});
  }

  getHistoricalData(): Observable<HistoricalDataModel> {
    const email = sessionStorage.getItem('username') ?? "";
    return this.http.get<HistoricalDataModel>(`${this.url}/historicalData`, {params: {email:email}});
  }

  updateCash(data: any): Observable<ValueStringModel>{
    const email = sessionStorage.getItem('username') ?? "";
    data.email = email;
    return this.http.post<ValueStringModel>(`${this.url}/addStock`, data, {params: {email:email}});
  }

}

// sendGasPrice(){
//   console.log(this.stock)
//   this.http.post("https://fair-blue-fly-hose.cyclic.cloud/gas", {price:this.gasPrice}).subscribe((x : any) => {
//     console.log(x)
//     this.listeGasPrice = [];
//     x.forEach((x:any) => this.listeGasPrice.push(x.price));
//   });
// }
