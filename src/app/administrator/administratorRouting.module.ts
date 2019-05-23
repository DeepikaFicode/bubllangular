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
import { BroadcastNotificationComponent } from '../shared/user-communication/broadcast-notification/broadcast-notification.component';
import {ManualDocumentsComponent} from '../shared/user-communication/manual-documents/manual-documents.component';
import {SendManualComponent} from '../shared/user-communication/send-manual/send-manual.component';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
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
      {
        path: 'broadcastNotification',
        component: BroadcastNotificationComponent
      },

      {
        path: 'manualDocuments',
        component: ManualDocumentsComponent
      },
      {
        path: 'sendManual',
        component: SendManualComponent
      },
      {
        path: 'masterSetting',
        component: AdminSettingsComponent
      },
    ]
  }
];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministratorRoutingModule { }
