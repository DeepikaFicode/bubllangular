import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { formGroupNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { formControlBinding } from '@angular/forms/src/directives/reactive_directives/form_control_directive';
import { StringifyOptions } from 'querystring';
import {Company} from '../../models/Company';


@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {
  companyForm: FormGroup;
  constructor(private formBuilder:FormBuilder, private route: ActivatedRoute, private router:Router,  private authService: AuthService,) { }

  ngOnInit() {
    this.companyForm=this.formBuilder.group ({
      name : ['',[null]],
      email :['',[null]],
      phone :['',[null]],
      contactPerson :['',[null]],
      town :['', [null]],
      country :['',[null]],
      addressLine1 :['',[null]],
      addressLine2: ['',[null]],
      postCode: ['',[null]],
      numberOfLicense:['',[null]],
      validForm:['',[null]],
      validTo:['',[null]],
      status:['',[null]],
      support:['',[null]],
      controllerChangeLimit:['',[null]],
      updateBackground:['',[null]]
    })
         
    }        
  }


