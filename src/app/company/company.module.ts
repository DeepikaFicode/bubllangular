import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company.component';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';
import { ListCompanyComponent } from './list-company/list-company.component';
import { CompanyRoutingModule } from '../company-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [CreateCompanyComponent, UpdateCompanyComponent, ListCompanyComponent, CompanyComponent],
  imports: [
    SharedModule,
    CommonModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule { }
