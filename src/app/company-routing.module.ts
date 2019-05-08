import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './landing/login/login.component';
import { CreateCompanyComponent } from './company/create-company/create-company.component';
import { UpdateCompanyComponent } from './company/update-company/update-company.component';
import { ListCompanyComponent } from './company/list-company/list-company.component';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {    
    path:'company',
    children:[
      {
        path: 'create',
        component:CreateCompanyComponent
      },
      {
        path: 'update',
        component:UpdateCompanyComponent
      },
      {
        path: 'list',
        component:ListCompanyComponent
      }
    ]
  }
];

@NgModule({
 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
