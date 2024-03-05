import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {RouterModule} from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component'
import { myCollection } from './Routing/myrouting';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DepartmentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(myCollection)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
