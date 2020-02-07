import { Component, OnInit } from '@angular/core';
import {SignalRService} from './services/signal-r.service';
import {HttpClient} from '@angular/common/http';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public chartOptions: any ={
    scaleShowVerticalLines: true,
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }; 
  public chartLabels : string[] = ["Real Time Data for The Chart"];
  public chartType : string = 'bar';
  public chartLegend :boolean = false;
  public colors : any[] =[{backgroundColor : '#5491DA' }, { backgroundColor: '#E74C3C' },
   { backgroundColor: '#82E0AA' }, { backgroundColor: '#E5E7E9' }];
   
  constructor(public signalRService : SignalRService ,  private Http :HttpClient){};

  ngOnInit(){
    this.signalRService.startConnection();
    this.signalRService.addTransferChartDataListner();
    this.startHttpRequest();
  };
  title = 'ChartsSignalr';
  private startHttpRequest = () => {
    this.Http.get('https://localhost:5001/api/v1/Chart')
             .subscribe(result => console.log( result));
  };
}
