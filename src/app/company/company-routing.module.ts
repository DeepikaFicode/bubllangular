import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../landing/login/login.component';
import { CompanyComponent } from './company.component';
import { CreateCompanyComponent } from '../administrator/create-company/create-company.component';
import { UpdateCompanyComponent } from '../administrator/update-company/update-company.component';
import { ListCompanyComponent } from '../administrator/list-company/list-company.component';
import {CompanyProfileComponent} from '../administrator/company-profile/company-profile.component';
import {CompanyDashboardComponent} from './company-dashboard/company-dashboard.component';

const routes: Routes = [
  {
    path: 'company',
    component: CompanyComponent,
    children: [

      {
        path: 'create',
        component: CreateCompanyComponent
      },

      {
        path: 'update',
        component: UpdateCompanyComponent
      },

      {
        path: 'list',
        component: ListCompanyComponent
      },

      {
        path: 'profile',
        component: CompanyProfileComponent
      },
      {
        path: 'dashboard',
        component: CompanyDashboardComponent
      }

    ]
  }
];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
