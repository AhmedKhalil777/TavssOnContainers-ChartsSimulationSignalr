import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-charts',
  templateUrl: './pie-charts.component.html',
  styleUrls: ['./pie-charts.component.css']
})
export class PieChartsComponent implements OnInit {

  public pieChartOptions :any ={
    exportEnabled: true,
    animationEnabled: true,
    legend:{
      cursor: "pointer"
    },
    title: {
      display: true,
      text: 'Percents of students reaction to services'
    }
  };

  public dataset =[
    {

      dataPoints: [
        { y: 26, name: "School Aid" },
        { y: 20, name: "Medical Aid" },
        { y: 5, name: "Debt/Capital" },
        { y: 3, name: "Elected Officials" },
        { y: 7, name: "University" },
        { y: 17, name: "Executive" },
        { y: 22, name: "Other Local Assistance"}
      ]
    }
   ];
   
  constructor() { }

  ngOnInit() {
  }

}
