import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ChartsModule} from 'ng2-charts';
import {HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { BarChartsComponent } from './bar-charts/bar-charts.component';
import { ScatterChartsComponent } from './scatter-charts/scatter-charts.component';
import { PieChartsComponent } from './pie-charts/pie-charts.component';

const routes: Routes = [
  { path: 'bar', component: BarChartsComponent },
  { path: '**', pathMatch:'full', redirectTo: 'routePath' }

];
export const appRouting = RouterModule.forRoot(routes); [

];

@NgModule({
  declarations: [
    AppComponent,
    BarChartsComponent,
    ScatterChartsComponent,
    PieChartsComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    RouterModule.forRoot(routes),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
