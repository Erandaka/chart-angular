import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators} from '@angular/forms';
import{Router} from '@angular/router';
import { IssueService } from '../../issue.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
createForm :FormGroup;

  constructor(private issueService :IssueService,private fb:FormBuilder, private router: Router) {
    this.createForm =this.fb.group({
      Product_Id :'',
      Product_Des :'',
      Product_Qty : '',
     Produce_Time : ''
     //  Produce_end_Time :''
    });
   }

   addIssue( Product_Id,Product_Des, Product_Qty, Produce_Time){
   this.issueService.addIssue(Product_Id,Product_Des, Product_Qty, Produce_Time).subscribe(()=>{
     this.router.navigate(['/list']);
   })
   }

  ngOnInit() {
  }

}
