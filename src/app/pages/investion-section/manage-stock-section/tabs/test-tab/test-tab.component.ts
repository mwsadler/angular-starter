import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-test-tab',
  templateUrl: './test-tab.component.html',
  styleUrls: ['./test-tab.component.scss']
})
export class TestTabComponent implements OnInit{
  value= 0;
  stock: string = "GOGL";
  stockPrice = 0;
  gasPrice = 0;
  listeGasPrice: string[] = [];
  constructor(private readonly http: HttpClient) {
  }

  ngOnInit() {
    this.http.get("https://fair-blue-fly-hose.cyclic.cloud/mongoDb").subscribe(x => {
    });

    this.http.get("https://fair-blue-fly-hose.cyclic.cloud/market", {params: {stock:this.stock}}).subscribe(x => {
    });
  }

  sendGasPrice(){
    this.http.post("https://fair-blue-fly-hose.cyclic.cloud/gas", {price:this.gasPrice}).subscribe((x : any) => {
      this.listeGasPrice = [];
      x.forEach((x:any) => this.listeGasPrice.push(x.price));
    });
  }

  getStockPrice(){
    this.http.get("http://127.0.0.1:5000/market", {params: {stock:this.stock}}).subscribe((x : any) => {
      this.stockPrice = x.price;
    });
  }
}
