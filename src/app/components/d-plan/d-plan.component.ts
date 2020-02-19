import { Component, OnInit,  Pipe, PipeTransform,ViewChild } from '@angular/core';
import {IssueService} from '../../issue.service';
import { DatePipe } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
// import {IMyDpOptions} from 'mydatepicker';

@Component({
  selector: 'app-d-plan',
  templateUrl: './d-plan.component.html',
  styleUrls: ['./d-plan.component.css']
})
export class DPlanComponent implements OnInit {

  @ViewChild(BaseChartDirective)
  public chart: BaseChartDirective;

  planningForm;
  isAdd = false;
  planningDetail;
  mpyear;
  lineChartData=[]=[];
  lineChartDataChart=[
    {data:[0,0],label:'Mismatch'}
  ];
  lineChartDataTable=[
    {data:[0,0],label:'Mismatch'}
  ];
  lineChartLabels=[]=[];
  // lineChartLabelsChart=[]=[];
  // lineChartLabelsTable=[]=[];
  lineChartLabelsChart=[
    'Time-1','Time-2'
  ];
  lineChartLabelsTable=[
    'Time-1','Time-2'
  ];


  startChart=false;
  data=[]=[];
  alertDetails;
  selectedDate;
  varienceChart=[]=[];
  dateChart=[]=[];
  varienceTable=[]=[];
  dateTable=[]=[];
  newDate;
  noRecord=false;
  constructor(
    private issueService:IssueService
  ) { }

  ngOnInit() {
   
}

  getDailyChart(){

    console.log('aaaaaaa',this.newDate);

    this.varienceChart=[];
    this.dateChart=[];
    this.varienceTable=[];
    this.dateTable=[];
    this.data=[];
    this.lineChartData=[];
    // this.lineChartDataChart=[];
    // this.lineChartDataTable=[];
    this.lineChartLabels.length=0;
    this.lineChartLabelsChart=[];
    this.lineChartLabelsTable=[];

    this.lineChartDataChart = [
      {data:this.varienceChart,label:'Mismatch'}
    ]
this.lineChartDataTable = [
      {data:this.varienceTable,label:'Mismatch'}
    ]

    this.issueService.getAlertDetails().subscribe(
      res=>{
        this.alertDetails=res;
        console.log('sssss',res);

        for(let i=0;i<this.alertDetails.length;i++){
         let date= this.alertDetails[i].timeStamp;
         var datePipe = new DatePipe("en-US");
         var d = datePipe.transform(date, 'yyyy/MM/dd');
         this.alertDetails[i].timeStamp=d;
console.log('eee',d);
        }

     console.log('eeee',this.newDate._d); // to create date as a date object
//methanin select karanadate eka
     var datePipe = new DatePipe("en-US");
     this.selectedDate = datePipe.transform(this.newDate._d, 'yyyy/MM/dd');
//dawase peyen peya ena data dispaly karai..ona format ekata ganna
     this.varienceTable.push('Mismatch');//table eke nm 2 mulin push karai
     this.dateTable.push('Time Period');
console.log(this.selectedDate,this.alertDetails);
for(let i=0;i<this.alertDetails.length;i++){
  //check karala blnwa api select kragththu date ekth ekka backend
  // eken ena date eka. ekai apit apennanna puluawn
  if(this.selectedDate==this.alertDetails[i].timeStamp){
    console.log('rrrrrwwwqw');
    this.varienceChart.push(this.alertDetails[i].variance);
    let cc="Time-"+(i+1); //nama hadagnnwa timeslot walata adalawa
    this.dateChart.push(cc); //chart eka aedena eke date array ekta push kragnnwa
    this.varienceTable.push(this.alertDetails[i].variance);
    this.dateTable.push(cc);

    //me widiha array ekk thamai oni chart adinna
    this.lineChartDataChart = [
              {data:this.varienceChart,label:'Mismatch'}
            ]
    this.lineChartDataTable = [
              {data:this.varienceTable,label:'Mismatch'}
            ]
            //label ekta adalawa oni me wage array 2k oni chart adinna
            this.lineChartLabelsChart=this.dateChart;
            this.lineChartLabelsTable=this.dateTable;
            console.log('555',this.varienceChart,this.varienceTable)
 
 
 //created for csv
 let aa={
  CustomerID:this.alertDetails[i].cId,
  OrderID:this.alertDetails[i].oid,
  ItemID:this.alertDetails[i].iId,
  Mismatch:this.alertDetails[i].variance,
  Date:this.alertDetails[i].timeStamp,
}
this.data.push(aa);
// this.chart.chart.update();
// this.startChart=true;
this.noRecord=false;
}
if(this.lineChartLabelsChart.length==0||this.lineChartLabelsTable.length==0){
  console.log(this.lineChartDataChart.length,this.lineChartLabelsTable.length);
  this.noRecord=true;
}
else{
  console.log('eeeeee9999');
  this.noRecord=false;
}

          }


},
error =>{
console.log(error);
}
);

  }

  

  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 
  
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }


  //this is for csv

  options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: false,
    headers: ['CustomerID','OrderID','ItemID','Mismatch','Date'],
    showTitle: true,
    title: 'Daily Planning Report',
    useBom: false,
    removeNewLines: true,
    keys: ['CustomerID','OrderID','ItemID','Mismatch','Date']
  };

  csv(){
    console.log("data",this.data);
  }

}
