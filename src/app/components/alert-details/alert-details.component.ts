import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-alert-details',
  templateUrl: './alert-details.component.html',
  styleUrls: ['./alert-details.component.css']
})
export class AlertDetailsComponent implements OnInit {

  datas = null;
  form = {
    "oid": null,
    "iId": null,
    "variance": null
  }
  formActive = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.post('http://68.183.84.177:4000/itemc/formdetails', this.form).subscribe(
      data => { this.datas = data; console.log(this.datas); if(this.datas.length>0) this.formActive = true; else this.formActive =false; }
    );
  }

  submit(){
    if(this.form.oid=="")
      this.form.oid = null;
    if(this.form.iId=="")
      this.form.iId = null;
    if(this.form.variance=="")
      this.form.variance = null;

    this.http.post('http://68.183.84.177:4000/itemc/formdetails', this.form).subscribe(
      data => { this.datas = data; console.log(this.datas); if(this.datas.length>0) this.formActive = true; else  this.formActive =false;}
    );
  }

}
