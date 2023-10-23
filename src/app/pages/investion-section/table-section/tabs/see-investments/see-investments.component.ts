import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {catchError, of, switchMap} from "rxjs";
import { InvestmentService } from 'src/core/services/http/investment/investment.service';
import {DayPerformanceModel, StocksPerformance} from "../../../../../../core/services/http/investment/investment/day-performance.model";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-see-investments',
  templateUrl: './see-investments.component.html',
  styleUrls: ['./see-investments.component.scss']
})
export class SeeInvestmentsComponent implements OnInit, AfterViewInit{
  displayedColumns: string[] = ['symbol', 'difference', 'percent'];

  isLoading: boolean = true;
  dayReturns: number = 0;
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
          return data.dayPerformance;
        case 'percent':
          return data.percentDayPerformance;
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
    this.dayReturns = this.dataSource.filteredData.reduce((total, stock) => total + stock.dayPerformance, 0);
  }
}
