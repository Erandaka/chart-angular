import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class IssueService {

  uri = 'http://localhost:4000';

  constructor(private http:HttpClient) {}

  getDetailPlanningByYear(year){
    return this.http.get('http://localhost:3000/dailyPlanning/'+year);
  }

  getDetailPlanning(){
    return this.http.get('http://localhost:3000/dailyPlanning');
  }
  postDetailPlanning(data){
    return this.http.post('http://localhost:3000/dailyPlanning',data);
  }

  getIssues() {
    return this.http.get('http://localhost:4000/issues');
  }
getIssueById(id){
  return this.http.get(`http://localhost:4000/issues/${id}`);
  }

  addIssue(Product_Id,Product_Des,Product_Qty,Produce_Time){
    const issue ={
      Product_Id:Product_Id,
      Product_Des:Product_Des,
      Product_Qty:Product_Qty,
      Produce_Time:Produce_Time
    };
    return this.http.post('http://localhost:4000/issue/add',issue);
  }
  
  updateIssue(id,Product_Id,Product_Des,Product_Qty,Produce_Time){
    const issue ={
      Product_Id:Product_Id,
      Product_Des:Product_Des,
      Product_Qty:Product_Qty,
      Produce_Time:Produce_Time
    };
    return this.http.post(`http://localhost:4000/issue/update/${id}`,issue);
  }
  deleteIssue(id){
    return this.http.get(`http://localhost:4000/issue/delete/${id}`);
  }
  getAlertDetails(){
    console.log('weee');
    return this.http.get('http://localhost:4000/alert/get');
  }
  // getOrderDetails(sdate,fdate){
  //   var newDate = new Date(sdate);
  //   var oldDate = new Date(fdate);
  //   //console.log(newDate);
  //   const bod = {
  //     nDate:newDate,
  //     oDate:oldDate
  //   }
  //   console.log(bod);
  //   return this.http.post('http://localhost:4000/order/getby',bod);
  // }
  getOrderDetails(){
    console.log('weee');
    return this.http.get('http://localhost:4000/order/get');
  }
  getTimeCardDetails(){
    console.log('weee');
    return this.http.get('http://localhost:4000/item/get');
  }
}
