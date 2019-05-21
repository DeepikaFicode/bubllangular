import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './landing/login/login.component';
import { AdministratorComponent } from './administrator/administrator.component';
import {CompanyComponent} from './company/company.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'administrator',
    component:AdministratorComponent
  },
  {
    path:'company',
    component:CompanyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
