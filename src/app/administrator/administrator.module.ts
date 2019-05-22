import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ApiService} from '../shared/services/api.service';
import {ExcelService} from '../shared/excelService/excel.service';
import {ConfirmationPopupComponent} from '../shared/utils/confirmation-popup/confirmation-popup.component';
import {SharedModule} from '../shared/shared.module';
import {AdministratorComponent} from './administrator.component';
import {AdministratorRoutingModule} from './administratorRouting.module';
import {CreateCompanyComponent} from './create-company/create-company.component';
import {UpdateCompanyComponent} from './update-company/update-company.component';
import {ListCompanyComponent} from './list-company/list-company.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SupportLoginComponent } from './support-login/support-login.component';
import {SystemEventComponent} from './system-event/system-event.component';
import {SupportLogin} from './support-login/supportLogin';
import {WellbeingComponent} from './wellbeing/wellbeing.component';
import {BroadcastNotificationComponent
} from '../shared/user-communication/broadcast-notification/broadcast-notification.component';
import {ManualDocumentsComponent} from '../shared/user-communication/manual-documents/manual-documents.component';
import {SendManualComponent} from '../shared/user-communication/send-manual/send-manual.component';

@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [
    AdministratorComponent,
    AdminDashboardComponent,
    CreateCompanyComponent,
    UpdateCompanyComponent,
    ListCompanyComponent,
    ConfirmationPopupComponent,
    SystemEventComponent,
    WellbeingComponent,
    SupportLoginComponent,
    BroadcastNotificationComponent,
    ManualDocumentsComponent,
    SendManualComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    AdministratorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  providers: [ApiService, ExcelService],
  entryComponents: [ConfirmationPopupComponent, SupportLoginComponent],
})
export class AdministratorModule {
}
