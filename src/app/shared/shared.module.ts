import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './Layout/header/header.component';
import {FooterComponent} from './Layout/footer/footer.component';
import {SidebarComponent} from './Layout/sidebar/sidebar.component';
import {InputControlMessagesComponent} from './validations/InputControlMessagesComponent';
import {NgbPopoverModule} from '@ng-bootstrap/ng-bootstrap';
import {MainComponent} from './Layout/main-component/main.component';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent, InputControlMessagesComponent, MainComponent ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    NgbPopoverModule,
    RouterModule
  ],
  exports: [HeaderComponent, FooterComponent, SidebarComponent, InputControlMessagesComponent ]
})
export class SharedModule { }
