import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {
  DayPerformanceModel,
  StocksPerformance
} from "../../../../../../core/services/http/investment/investment/day-performance.model";
import {MatTableDataSource} from "@angular/material/table";
import {InvestmentService} from "../../../../../../core/services/http/investment/investment.service";
import {MatSort} from "@angular/material/sort";
import {catchError, of, switchMap} from "rxjs";

@Component({
  selector: 'app-overall-investments',
  templateUrl: './overall-investments.component.html',
  styleUrls: ['./overall-investments.component.scss']
})
export class OverallInvestmentsComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['symbol', 'total', 'difference', 'percent'];

  isLoading: boolean = true;
  totalReturns: number = 0;
  totalValue: number = 0;
  dataSource: MatTableDataSource<StocksPerformance> = new MatTableDataSource<StocksPerformance>();
  constructor(private readonly investmentService: InvestmentService) {
  }

  ngOnInit() {
    this.getDaysReturns();
  }

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (data, attribute) => {
      switch (attribute) {
        case 'difference':
          return data.overallPerformance;
        case 'percent':
          return data.percentOverallPerformance;
        case 'total':
          return data.totalValue
        default:
          return data.symbol
      }
    };
    this.dataSource.filterPredicate = (data, filter) => data.account === filter;
  }

  getDaysReturns(): void {
    this.isLoading = true;
    this.investmentService.getDayReturn().pipe(
        switchMap( (value: DayPerformanceModel) => {
          console.log(value)
          this.dataSource.data = value.stocksPerformance
          this.setTotal();
          this.isLoading = false;
          return of(true)
        }),
        catchError(error => {
          console.log(error);
          this.isLoading = false;
          return of(false);
        })
    ).subscribe();
  }

  onSelectionChange(event: any){
    this.dataSource.filter = event.value;
    this.setTotal();
  }

  setTotal(): void {
    this.totalReturns = this.dataSource.filteredData.reduce((total, stock) => total + stock.overallPerformance, 0);
    this.totalValue = this.dataSource.filteredData.reduce((total, stock) => total + stock.totalValue, 0);
  }
}
