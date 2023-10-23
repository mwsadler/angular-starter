import {Component, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import {InvestmentService} from "../../../../../../core/services/http/investment/investment.service";
import {catchError, of, switchMap} from "rxjs";
import {HistoricalDataModel} from "../../../../../../core/services/http/investment/investment/historical-data.model";

@Component({
  selector: 'app-timeline-chart',
  templateUrl: './timeline-chart.component.html',
  styleUrls: ['./timeline-chart.component.scss']
})
export class TimelineChartComponent implements OnInit{

  updateFlag: boolean = false;
  isLoading: boolean = false;
  data: HistoricalDataModel = {CELI: [], REER: [], CELIAPP: [], CASH: [], TOTAL: []};

  constructor(private investmentService: InvestmentService) {
  }

  ngOnInit() {
    this.getHistoricalData();
  }


  getHistoricalData(): void {
    this.isLoading = true;
    this.investmentService.getHistoricalData().pipe(
      switchMap( (value: HistoricalDataModel) => {
        this.data = value;
        this.setChart(value['TOTAL'], 'TOTAL')
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

  onSelectionChange(event: any): void{
    const key = event.value;
    let data: any = [];
    switch (key) {
      case "CELI":
        data = this.data.CELI
        break;
      case "CELIAPP":
        data = this.data.CELIAPP
        break;
      case "CASH":
        data = this.data.CASH
        break;
      case "REER":
        data = this.data.REER
        break;
      default:
        data = this.data.TOTAL
    }
    this.setChart(data, key);
  }

  setChart(data:any, key:string): void {
    this.chartOptions.series = [];
    this.chartOptions.series?.push({
      name: key,
      type: 'area',
      data:data,
      gapSize: 10,
      tooltip: {
        valueDecimals: 2,

      },
      fillColor: {
        linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
        stops: [
          [0, '#2caffe'], // start
          [1, 'rgba(192,192,192,0.0001)'] // end
        ]
      },
      threshold: null,
      turboThreshold: 0
    });

    this.updateFlag = true;
  }

  Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {

    chart: {
      type: 'line',
      zooming: {
        type: 'x'
      }
    },

    title: {
      text: 'Portfolio value'
    },

    subtitle: {
      text: 'Click and drag in the plot area to zoom in'
    },

    xAxis: {
      gridLineWidth: 0
    },

    rangeSelector: {
      buttons: [{
        type: 'day',
        count: 1,
        text: '1d',
      }, {
        type: 'month',
        count: 1,
        text: '1m',
      }, {
        type: 'month',
        count: 3,
        text: '3m'
      }, {
        type: 'month',
        count: 6,
        text: '6m'
      }, {
        type: 'ytd',
        text: 'YTD'
      }, {
        type: 'year',
        count: 1,
        text: '1y'
      }, {
        type: 'all',
        text: 'All'
      }]
    },

    series: [
      {
      name: 'AAPL',
      type: 'area',
      data:[ ],
      gapSize: 5,
      tooltip: {
        valueDecimals: 2
      },
      fillColor: {
        linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
        stops: [
          [0, '#2caffe'], // start
          [1, 'rgba(192,192,192,0.0001)'] // end
        ]
      },
      threshold: null,
      turboThreshold: 0

    }]
  };


}
