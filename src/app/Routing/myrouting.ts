import { Routes } from "@angular/router";
import { EmployeeComponent } from "../employee/employee.component";
import { DepartmentComponent } from "../department/department.component";

export const myCollection:Routes = [
{path:'Employee', component:EmployeeComponent},
{path:'Department', component:DepartmentComponent}
]