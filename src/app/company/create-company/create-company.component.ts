import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { formGroupNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { formControlBinding } from '@angular/forms/src/directives/reactive_directives/form_control_directive';



@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {
  companyForm: FormGroup;
  

  constructor() { }

  ngOnInit() {

    this.companyForm = new FormGroup({
      'name':new FormControl(null,Validators.required),
      'email':new FormControl(null,[Validators.required,Validators.email ]),
      'phone':new FormControl(null, Validators.pattern("^[0-9]*$")),
      'contactPerson':new FormControl(null),
      'addressLine1':new FormControl(null),
      'addressLine2':new FormControl(null),
      'town':new FormControl(null),
      'county':new FormControl(null),
      'postcode':new FormControl(null),
      'noOfLicense' :new FormControl(null),
      'validFrom' :new FormControl(null),
      'validTo' :new FormControl(null),
      'status' :new FormControl(null),
     'language' : new FormControl(null),
     'support' : new FormControl (null),
     'defaultLanguage' : new FormControl(null),
     'controllerChangeLimit' :new FormControl(null),
     'logo' :new FormControl(null),
     'Background' :new FormControl(null)

  });

}
onSubmit(){
  console.log(this.companyForm);
}

  }
