import { Component, OnInit, Pipe, PipeTransform ,ViewChild } from '@angular/core';
import { IssueService } from '../../issue.service';
import { DatePipe , } from '@angular/common';
import * as _ from 'lodash';
import { BaseChartDirective } from 'ng2-charts';
// import { BaseChartDirective } from 'ng2-charts/charts/charts';

@Component({
  selector: 'app-cus-details',
  templateUrl: './cus-details.component.html',
  styleUrls: ['./cus-details.component.css']
})
export class CusDetailsComponent implements OnInit {

  @ViewChild(BaseChartDirective)
  public chart: BaseChartDirective;

  orderDetails: any = [];
  years: any = [];
  backTrack;

  constructor(private issueService: IssueService) { }

  ngOnInit() {

    var datePipe = new DatePipe("en-US");
    this.issueService.getOrderDetails().subscribe(res => {
      this.orderDetails = res;
      this.years[0] = parseInt(datePipe.transform(this.orderDetails[0].dueDate, 'yyyy'));
      for(var i=0; i<this.orderDetails.length; i++){
        if(this.orderDetails[i].dueDate){
        var date = this.orderDetails[i].dueDate;
        var d = datePipe.transform(date, 'MM');
        var y = datePipe.transform(date, 'yyyy'); 
        let len = this.years.length;       
        for(var j=0; j<len; j++){
          if(this.years[j]==parseInt(y))
            break;
          if(j==len-1)
            this.years.push(parseInt(y));
        }
      }
      console.log(this.years);
      this.draw(this.years[0]);
    }
    });
  }

  drawChart(year){
    console.log(year);
    this.draw(year);
  }

  draw(year){
    this.startChart = false;
    this.barChartLabels = [];
    var count=0;

    var chartData = new Array(12);
    for(var i=0 ; i<12; i++)
      chartData[i] = 0;
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];


    this.backTrack = new Array(12);
    for(var i=0; i<12; i++){
      this.backTrack[i] = new Array();
    }
   //console.log(this.backTrack[0].length);
      console.log('data', this.orderDetails);
      for (let i = 0; i < this.orderDetails.length; i++) {
        if(this.orderDetails[i].dueDate){
        let date = this.orderDetails[i].dueDate;
        var datePipe = new DatePipe("en-US");
        var d = datePipe.transform(date, 'MM');
        var y = datePipe.transform(date, 'yyyy');
        var id = this.orderDetails[i].cId;

        let len = this.backTrack[parseInt(d)-1].length; 
        if(len==0){
          this.backTrack[parseInt(d)-1].push(id);
          if(y == year){
            chartData[parseInt(d)-1]++;
            count++;
          }
        }
        for(var j=0; j<len; j++){
          if(this.backTrack[parseInt(d)-1][j]==id)
            break;
          if(j==len-1){
            this.backTrack[parseInt(d)-1].push(id);
            if(y == year){
              chartData[parseInt(d)-1]++;
              count++;
            }
          }
        }
        
      }
    }



        this.barChartLabels = months;
        this.barChartData = [
          { data: chartData, label: 'Orders' },
        ];
        if(count>0)
          this.startChart = true

  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }


  selectedYear;
  aa = [] = [];
  bb = [] = [];
  lineChartDataChart;
  lineChartDataTable;
  lineChartLabelsChart;
  lineChartLabelsTable;
  startChart = false;
  barChartLabels = [];
  barChartData = [];
  qq;
  barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;
}