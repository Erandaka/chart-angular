import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute} from '@angular/router';
import{FormGroup,FormBuilder,Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material';

import{IssueService} from '../../issue.service';
import {Issue} from '../../issue.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id:String;
  issue:any={};
  updateForm:FormGroup;

  constructor(private issueService:IssueService,private router:Router,private route:ActivatedRoute,private snackBar:MatSnackBar,private fb:FormBuilder){
 this.createForm();
  }

createForm (){
  this.updateForm =this.fb.group({
    Product_Id :'',
    Product_Des :'',
    Product_Qty : '',
   Produce_Time : ''
  });
}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id =params.id;
      this.issueService.getIssueById(this.id).subscribe(res => {
        this.issue = res;

        this.updateForm.get('Product_Id').setValue(this.issue.Product_Id);
        this.updateForm.get('Product_Des').setValue(this.issue.Product_Des);
        this.updateForm.get('Product_Qty').setValue(this.issue.Product_Qty);
        this.updateForm.get('Produce_Time').setValue(this.issue.Produce_Time);
      });
    });
  }
updateIssue(Product_Id,Product_Des,Product_Qty,Produce_Time){
  this.issueService.updateIssue(this.id,Product_Id,Product_Des,Product_Qty,Produce_Time).subscribe(()=>{
    this.snackBar.open(' product update sucessfully','ok',{
      duration :3000
    });
  });
  this.router.navigate(['/list']);
}
}
