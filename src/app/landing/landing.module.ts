import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {SharedModule} from '../shared/shared.module';
import {LandingRoutingModule} from './landing-Routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    LandingRoutingModule
  ],
})
export class LandingModule { }
