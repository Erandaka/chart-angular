import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IssueService } from '../../issue.service';
import { DatePipe } from '@angular/common';
import * as _ from 'lodash';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  selectedYear;
  orderDetails;
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
  constructor(
    private issueservice: IssueService
  ) { }

  ngOnInit() {


    // if(this.orderDetails[i].year!=this.selectedYear){
    //   this.orderDetails.remove(this.orderDetails[i]);
    // }

    //  for(let j=0;j<this.orderDetails.length;j++){
    //   if(j!=0 && (this.orderDetails[j].startDate==this.orderDetails[j--].startDate)){
    //     console.log('dddd',this.orderDetails[j].startDate);
    //   }
    // }

  }





  getOrderChart() {
    this.startChart = false;
    this.barChartLabels = [];
    var count=0;

    var chartData = new Array(12);
    for(var i=0 ; i<12; i++)
      chartData[i] = 0;
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];


    this.issueservice.getOrderDetails().subscribe(res => {
      this.orderDetails = res;
      console.log('data', this.orderDetails);
      for (let i = 0; i < this.orderDetails.length; i++) {
        let date = this.orderDetails[i].dueDate;
        var datePipe = new DatePipe("en-US");
        var d = datePipe.transform(date, 'MM');
        var y = datePipe.transform(date, 'yyyy');
        if(y == this.selectedYear){
          chartData[parseInt(d)-1]++;
          count++;
        }
      }

      this.barChartLabels = months;
      this.barChartData = [
        { data: chartData, label: 'Orders' },
      ];
      if(count>0)
        this.startChart = true

    });
  }


  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }



  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;




}
