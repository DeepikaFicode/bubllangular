import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CompanyComponent} from './company.component';
import {CompanyRoutingModule} from './company-routing.module';
import {SharedModule} from '../shared/shared.module';
import {CompanyProfileComponent} from '../administrator/company-profile/company-profile.component';
import {CompanyDashboardComponent} from './company-dashboard/company-dashboard.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ApiService} from '../shared/services/api.service';
import {ExcelService} from '../shared/excelService/excel.service';
import {ConfirmationPopupComponent} from '../shared/utils/confirmation-popup/confirmation-popup.component';

@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [
    CompanyComponent,
    CompanyDashboardComponent,
    CompanyProfileComponent],
  imports: [
    SharedModule,
    CommonModule,
    CompanyRoutingModule,
  ],
  providers: [ApiService, ExcelService],
  entryComponents: [ConfirmationPopupComponent],
})
export class CompanyModule {
}
