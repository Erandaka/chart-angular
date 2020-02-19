import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {RouterModule,Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 
import{ReactiveFormsModule} from '@angular/forms';
import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule, MatCardModule, MatTableModule, MatDividerModule, MatSnackBarModule } from '@angular/material';


import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import {IssueService } from './issue.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DPlanComponent } from './components/d-plan/d-plan.component';
import {AppRoutingModule} from './routing_module';
import { CusDetailsComponent } from './components/cus-details/cus-details.component';
import { TimingCardComponent } from './components/timing-card/timing-card.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { ChartsModule } from 'ng2-charts';
import { Angular2CsvModule } from 'angular2-csv';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import {DpDatePickerModule} from 'ng2-date-picker';
import { AlertDetailsComponent } from './components/alert-details/alert-details.component';
// import { MyDatePickerModule } from 'mydatepicker';
// const routes:Routes=[
// {path:'create',component:CreateComponent},
// {path:'edit/:id',component :EditComponent},
// {path:'list',component :ListComponent},
// {path:'',component :ListComponent}
// ]

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    EditComponent,
    NavbarComponent,
    DPlanComponent,
    CusDetailsComponent,
    TimingCardComponent,
    OrderDetailsComponent,
    HomeComponent,
    AlertDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    //  RouterModule.forRoot(routes),
     MatToolbarModule,
     MatFormFieldModule,
     MatInputModule,
     MatOptionModule,
     MatSelectModule,
     MatIconModule,
     MatButtonModule,
     MatCardModule,
     MatTableModule,
     MatDividerModule,
     MatSnackBarModule,
     AppRoutingModule,
     ChartsModule,
     Angular2CsvModule,
     FormsModule,
     DpDatePickerModule
    //  MyDatePickerModule

  ],
  providers: [IssueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
