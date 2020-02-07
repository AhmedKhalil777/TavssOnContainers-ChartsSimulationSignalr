import { Injectable } from '@angular/core';
import * as  signalr from '@aspnet/signalr';
import { ChartModel } from '../interfaces/chart-model';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  public data : ChartModel[];
  private hubConnection : signalr.HubConnection 

  constructor() { }

  public startConnection = () => {
    this.hubConnection = new signalr.HubConnectionBuilder()
                                    .withUrl('https://localhost:5001/Charts')
                                    .build();
    
    this.hubConnection
        .start()
        .then(() => console.log('The Connection started'))
        .catch(err => console.log('There are an error :' + err)  );
    
  };

  public addTransferChartDataListner =() => {
    this.hubConnection.on('TransferCharts', (data) => {
      this.data = data;
      console.log(data); 
    }); 
  };
}
