import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormBuilder, FormGroup} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LandingModule} from './landing/landing.module';
import {CompanyModule} from './company/company.module';
import {AdministratorModule} from './administrator/administrator.module';
import {SharedModule} from './shared/shared.module';
//import { UserCommunicationModule } from './shared/user-communication/user-communication.module';
import {MatInputModule, MatOptionModule, MatSelectModule, MatIconModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import {NgbActiveModal, NgbModule, NgbPopoverModule} from '@ng-bootstrap/ng-bootstrap';

import {from} from 'rxjs';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    HttpClientModule,
    NgbModule,
    NgbPopoverModule,
    SharedModule,
    CompanyModule,
    LandingModule,
    AdministratorModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    //UserCommunicationModule
  ],
  providers: [NgbActiveModal],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
