import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../landing/login/login.component';
import {MainComponent} from '../shared/Layout/main-component/main.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: MainComponent,
    children: [
      {path: 'company', loadChildren: '../company/company.module#CompanyModule'}
    ]
  }

];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule {
}


