import { Component } from '@angular/core';
import {InvestmentService} from "src/core/services/http/investment/investment.service";
import {AddStockModel} from "src/core/services/http/investment/investment/add-stock.model";
import {catchError, of, switchMap} from "rxjs";
import {ValueNumberModel} from "../../../../../../core/services/http/investment/investment/value-number.model";
import {ValueStringModel} from "../../../../../../core/services/http/investment/investment/value-string.model";

@Component({
  selector: 'app-input-stock',
  templateUrl: './input-stock.component.html',
  styleUrls: ['./input-stock.component.scss']
})
export class InputStockComponent {

  account: string = '';
  stockSymbol: string = '';
  stockCount: number = 0;
  averagePrice: number = 0;
  addStockMessage: string | null = null;

  checkSymbol: string = '';
  symbolValidityMessage: string | null = null;

  constructor(private readonly investmentService: InvestmentService) {
  }
  AddStock(): void {
    const data: AddStockModel = {
        account: this.account,
        symbol: this.stockSymbol,
        count: this.stockCount,
        averageCost: this.averagePrice,
        email: ''
    } ;

    this.investmentService.addStock(data).pipe(
        switchMap( (value: ValueStringModel) => {
            console.log(value)
            this.addStockMessage = value.value;
            return of(true)
        }),
        catchError(error => {
            console.log(error);
            return of(false);
        })
    ).subscribe();;
  }

  checkValidity(): void {
      this.investmentService.checkSymboValidity(this.checkSymbol).pipe(
          switchMap( (value: ValueStringModel) => {
              this.symbolValidityMessage = value.value;
              return of(true)
          }),
          catchError(error => {
              console.log(error);
              return of(false);
          })
      ).subscribe();
  }
}
