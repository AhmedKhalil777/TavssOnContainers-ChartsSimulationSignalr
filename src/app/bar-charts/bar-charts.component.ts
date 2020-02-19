import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-charts',
  templateUrl: './bar-charts.component.html',
  styleUrls: ['./bar-charts.component.css']
})
export class BarChartsComponent implements OnInit {

  public chartOptions: any ={
    scaleShowVerticalLines: true,
    responsive: true,
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Real-Time Examing of Midterm results'
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]

  }
  }; 
  public chartLabels : string[] = ["0-2" , '2-4' , '4-6' , '6-8' , '8-10'];
  public chartType : string = 'bar';
  public datasets = [{
    label:'1st st',
    data: [120, 160, 230,150,120]

},
{
  label:'2nd st',
  data: [100, 120, 78,55,230]

},
{
  label:'3rd st',
  data: [20, 240, 120,30,250]

},
{
  label:'4th st',
  data: [100, 120, 78,55,230]

}
]
  public chartLegend :boolean = false;
  public colors : any[] =[{backgroundColor : 'rgba(0, 0, 0, 0.2)'}, { backgroundColor: 'rgba(255, 0, 0, 0.2)' },
   { backgroundColor: 'rgba(0, 0, 255, 0.2)' }, { backgroundColor: 'rgba(0, 255, 0, 0.2)' }];
 
  constructor() { }

  ngOnInit() {
  }

}
