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
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Real-Time Interaction of students with our services'
    },
    scale: {
      angleLines: {
          display: false
      },
      ticks: {
          suggestedMin: 50,
          suggestedMax: 300
      }
  }
  }; 
  public chartLabels : string[] = ["Course" , 'Project' , 'Community' , 'Acclaims' , 'Assignment'];
  public chartType : string = 'radar';
  public datasets = [{
    label:'1st st',
    data: [120, 160, 230,150,120]
},{
  label:'2nd St',
  data: [134, 100, 120,290,72]
}, {
  label:'3rd St',
  data: [53, 200, 234,134,156]
},{
  label:'4th St',
  data: [235, 90, 230,45,213]
}]
  public chartLegend :boolean = false;
  public colors : any[] =[{backgroundColor : 'rgba(0, 0, 0, 0.2)'}, { backgroundColor: 'rgba(255, 0, 0, 0.2)' },
   { backgroundColor: 'rgba(0, 0, 255, 0.2)' }, { backgroundColor: 'rgba(0, 255, 0, 0.2)' }];
   
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
