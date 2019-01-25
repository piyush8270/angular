import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeComponent} from './employee/employee.component';
import{AddEmployeeComponent} from './add-employee/add-employee.component';
import {SigninComponent} from './signin/signin.component';

const routes: Routes = [
  { path: 'employee', component: EmployeeComponent },
  { path: 'addemployee', component: AddEmployeeComponent },
  { path: 'usersignin', component: SigninComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {

}