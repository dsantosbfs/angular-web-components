import { ChartType, ChartDataSets } from 'chart.js';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import * as ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart } from 'chart.js';
import { DoughnutChart } from './doughnut-chart.class';

@Component({
  selector: 'lib-chart',
  templateUrl: './chart.component.html'
})
export class ChartComponent implements OnInit {
  @ViewChild('doughnut', { static: false }) canvasElement: ElementRef;

  @Input() type: ChartType;
  @Input() set data(data) {
    if (!data) {
      return;
    }

    if (this.type === 'doughnut') {
      setTimeout(() => {
        this.doughnutInstance = new DoughnutChart({
          data,
          options: {
            canvas: this.canvasElement.nativeElement,
            options: this.chartOptions
          }
        });
      }, 1000);

      return;
    }

    if (this.type === 'bar') {
      this.datasets = this.configBarChart(data);

      return;
    }

    this.datasets = data;
  }
  @Input() set options(options) {
    this.chartOptions = Object.assign({}, this.defaultOptions, options);
  }
  @Input() labels: string[];

  public datasets: ChartDataSets;
  public chartOptions;
  public defaultOptions = {
    layout: {
      padding: {
        top: 24
      }
    },
    plugins: {
      datalabels: {
        align: 'end',
        anchor: 'end'
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: 'bottom',
      labels: {
        usePointStyle: true,
        fontFamily: 'Roboto'
      },
      onClick: (e) => e.stopPropagation()
    },
    scales: {
      xAxes: [{
        display: 'auto',
        maxBarThickness: 110,
        gridLines: {
          color: '#747679',
          drawTicks: false,
          drawOnChartArea: false
        },
        ticks: {
          padding: 10
        },
      }],
      yAxes: [{
        display: false,
        minBarLength: 2,
        ticks: {
          beginAtZero: true
        }
      }]
    },
  };

  public doughnutInstance;

  constructor() {
    this.chartOptions = Object.assign({}, this.defaultOptions);
  }

  ngOnInit(): void {
    Chart.pluginService.register(ChartDataLabels);
  }

  private configBarChart(data: any): any {
    const colors = [
      '#17D5D5',
      '#3D2892',
      '#B90EAD'
    ];
    const dataStyle = [
      {
        backgroundColor: colors[0],
        hoverBackgroundColor: colors[0],
        borderColor: '#ffffff'
      },
      {
        backgroundColor: colors[1],
        hoverBackgroundColor: colors[1],
        borderColor: '#ffffff'
      },
      {
        backgroundColor: colors[2],
        hoverBackgroundColor: colors[2],
        borderColor: '#ffffff'
      }
    ];
    const formatedData = [];

    if (!data.length) {
      return null;
    }

    if (data.length > 1) {
      for (let i = 0; i < data.length; i ++) {
        formatedData.push(Object.assign({}, dataStyle[i], data[i]));
      }
    } else {
      formatedData.push(Object.assign({}, {
        backgroundColor: colors,
        hoverBackgroundColor: colors,
        borderColor: '#ffffff'
      }, data[0]));
    }

    return formatedData;
  }
}
