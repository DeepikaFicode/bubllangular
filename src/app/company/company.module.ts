import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';
import { ListCompanyComponent } from './list-company/list-company.component';
import { CompanyRoutingModule } from '../company-routing.module';

@NgModule({
  declarations: [CreateCompanyComponent, UpdateCompanyComponent, ListCompanyComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule { }
