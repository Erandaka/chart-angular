import { Component, OnInit,ViewChild } from '@angular/core';
import {IssueService} from '../../issue.service';
import { DatePipe , } from '@angular/common';
import * as _ from 'lodash';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-timing-card',
  templateUrl: './timing-card.component.html',
  styleUrls: ['./timing-card.component.css']
})
export class TimingCardComponent implements OnInit {

  constructor(
    private issueservice:IssueService
  ) { }

  @ViewChild(BaseChartDirective)
  public chart: BaseChartDirective;

  orderDetails: any = [];
  chartDetails: any;
  years: any = [];
  barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  barChartLabels=["Item Name"];

  barChartType = 'bar';
  barChartLegend = true;
  
  
  barChartData=[
    {data: [0], label: 'Machine Hours'},
    {data: [0], label: 'Labour Hours'}
  ];
  timeCardDetails;
  chartLabelsData=[]=[];
  chartData1=[]=[];
  chartData2=[]=[];

  csv(){
    console.log(this.timeCardDetails);
  }
  ngOnInit() {//front end eke patan gannakotama pennana oni ewa load wenna meka use karai
    this.barChartLabels.length=0;
    this.issueservice.getTimeCardDetails().subscribe(res=>{
      console.log(res);
      this.timeCardDetails=res;
      for(let i=0; i<this.timeCardDetails.length;i++){
console.log(this.timeCardDetails[i]);
this.chartData1.push(this.timeCardDetails[i].sLHours);
this.chartData2.push(this.timeCardDetails[i].sMHours);
this.barChartLabels.push(this.timeCardDetails[i].iName);

      }

      // this.generateChart(res);
      // this.drawChart(this.years[0]);
      this.drawBarCharts();
    });
   
  }
  drawBarCharts(){// kalin array 2 me array ekara set kaeaii..value array eka illana
    console.log('ssss',this.chartData1,this.chartData2,this.chartLabelsData);
    // this.barChartLabels.length=0;
    // this.barChartLabels = this.chartLabelsData;
    this.barChartData = [
      {data: this.chartData1, label: 'Machine Hours'},
      {data: this.chartData2, label: 'Labour Hours'}
    ];
  
    this.chart.chart.update();
  }

 

  options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: false,
    headers: ['CustomerID','Name','Laubour Hours','Maching Hoours'],
    showTitle: true,
    title: 'Timing Card Report',
    useBom: false,
    removeNewLines: true,
    keys: ['iId','iName','sLHours','sMHours']
  };




}
 