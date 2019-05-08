import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingModule} from './landing/landing.module';
import { CompanyModule} from './company/company.module';
import { SharedModule} from './shared/shared.module';


import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    LandingModule,
    CompanyModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
