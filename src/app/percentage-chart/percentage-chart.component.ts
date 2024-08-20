import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-percentage-chart',
  templateUrl: './percentage-chart.component.html',
  styleUrls: ['./percentage-chart.component.css']
})
export class PercentageChartComponent implements OnInit {
  
  @Input() percentage: number = 0; // Valor de entrada en porcentaje
  public chartOptions: any;
  public chartLabels: string[] = ['Completed', 'Remaining'];
  public chartData: number[] = [0, 100];
  public chartType: string = 'doughnut';
  public chartColors: any[] = [{
    backgroundColor: ['#4CAF50', '#D3D3D3']
  }];

  constructor() { }

  ngOnInit(): void {
    this.updateChart();
  }

  ngOnChanges(): void {
    this.updateChart();
  }

  updateChart(): void {
    this.chartData = [this.percentage, 100 - this.percentage];
  }
}