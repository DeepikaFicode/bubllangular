import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import {CreateCompanyComponent} from './create-company/create-company.component';
import {UpdateCompanyComponent} from './update-company/update-company.component';
import {ListCompanyComponent} from './list-company/list-company.component';
import {AdministratorComponent} from './administrator.component';
import {CompanyProfileComponent} from './company-profile/company-profile.component';
import {SystemEventComponent} from './system-event/system-event.component';
import {WellbeingComponent} from './wellbeing/wellbeing.component';

const routes: Routes = [
  {
    path: 'administrator',
    component: AdministratorComponent,
    children: [
      {
        path: 'dashboard',
        component: AdminDashboardComponent
      },
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
        path: 'companyUserSystemEvent',
        component: SystemEventComponent
      },

      {
        path: 'companyUserWellbeing',
        component: WellbeingComponent
      },
    ]
  }
];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministratorRoutingModule { }
