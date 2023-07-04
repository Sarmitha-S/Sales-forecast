import { Component, Input, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.css'],
})
export class VisualizationComponent implements OnInit {
  lineChart: any = [];
  barChart: any = [];

  constructor() {
    Chart.register(...registerables);
  }
  ngOnInit() {}

  linePlot(
    predictedColumnName: any,
    predicted_column: any[],
    predicted_date: any[],
    columnName: any
  ) {
    var lineChartExist = Chart.getChart('linePlot');

    if (lineChartExist != undefined) {
      lineChartExist.destroy();
    }

    this.lineChart = new Chart('linePlot', {
      type: 'line',
      data: {
        labels: predicted_date,
        datasets: [
          {
            label: predictedColumnName,
            data: predicted_column,
            fill: false,
            backgroundColor: 'aqua;',
            borderColor: 'aqua',
            borderWidth: 3,
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgb(250, 4, 111);',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgb(250, 4, 111);',
            pointHoverBorderColor: 'rgba(250, 4, 111);',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            
          },
        ],
      },

      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Line Chart',
          },
        },
        interaction: {
          intersect: false,
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true,
            },
          },
          y: {
            display: true,
            title: {
              display: true,
              text: columnName,
            },
            suggestedMin: Math.min(...predicted_column) - 1,
            suggestedMax: Math.max(...predicted_column) + 1,
          },
        },
      },
    });
  }

  barPlot(
    predictedColumnName: any,
    predicted_column: any[],
    predicted_date: any[],
    columnName: any
  ) {
    var lineChartExist = Chart.getChart('barPlot');

    if (lineChartExist != undefined) {
      lineChartExist.destroy();
    }
    this.barChart = new Chart('barPlot', {
      type: 'bar',
      data: {
        labels: predicted_date,
        datasets: [
          {
            label: predictedColumnName,
            data: predicted_column,
            backgroundColor: 'aqua',
            borderColor: 'aqua',
            borderWidth: 3,
          },
        ],
      },

      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Bar Chart',
          },
        },
        interaction: {
          intersect: false,
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true,
            },
          },
          y: {
            display: true,
            title: {
              display: true,
              text: columnName,
            },
            suggestedMin: Math.min(...predicted_column) - 1,
            suggestedMax: Math.max(...predicted_column) + 1,
          },
        },
      },
    });
  }
}
