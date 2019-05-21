import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { formGroupNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { formControlBinding } from '@angular/forms/src/directives/reactive_directives/form_control_directive';
import { StringifyOptions } from 'querystring';
import {Company} from '../../models/Company';
import {assertNumber} from '@angular/core/src/render3/assert';
import {UtilService} from '../../shared/services/sharedServices/utilService/util.service';
import {InputControls} from '../../shared/validations/InputControls';
import {CompanyService} from '../../shared/services/companyService/company.service';
import {CommonService} from '../../shared/services/sharedServices/commonService/common.service';
import {NavigateUrls} from '../../shared/utils/NavigateUrls';
import {ExcelService} from '../../shared/excelService/excel.service';
import { ConfirmationPopupComponent } from '../../shared/utils/confirmation-popup/confirmation-popup.component';


@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})

export class  CreateCompanyComponent implements OnInit {

  companyForm: FormGroup;
  public inputControls = InputControls;
  public navigateUrls = NavigateUrls;
  show = false;
  submitted = false;
  data: any = [{
    rowid: '1',
    companyid: 'coo23',
    companyname: 'test',
    email: 'test@gmail.com',
    validFrom: '07/05/2019',
    validTo: '31/05/2019',
    address: 'mohali',
    supportRequired: 'Yes',
    controllerLimit: '2',
    status: 'Active',

  },
    {
      rowid: '1',
      companyid: 'coo23',
      companyname: 'test',
      email: 'test@gmail.com',
      validFrom: '07/05/2019',
      validTo: '31/05/2019',
      address: 'mohali',
      supportRequired: 'Yes',
      controllerLimit: '2',
      status: 'Active',
    },
    {
      rowid: '1',
      companyid: 'coo23',
      companyname: 'test',
      email: 'test@gmail.com',
      validFrom: '07/05/2019',
      validTo: '31/05/2019',
      address: 'mohali',
      supportRequired: 'Yes',
      controllerLimit: '2',
      status: 'Active',
    }];

  /**
   * @constructor of the class
   * @param commonService
   * @param formBuilder
   * @param companyService
   * @param utilService
   */
  // tslint:disable-next-line:max-line-length
  constructor(private formBuilder: FormBuilder,
              private companyService: CompanyService,
              private utilService: UtilService,
              private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService,
              private excelService: ExcelService,
              private modalService: NgbModal ) { }

  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.data, 'sample');
  }

  ngOnInit() {
this.companyForm = this.formBuilder.group ({
  name : ['', [Validators.required]],
  email : ['', [Validators .required]],
  phone : ['', [Validators.required]],
  contactPerson : ['', [Validators.required]],
  town : ['', [Validators.required]],
  country : ['', [Validators.required]],
  addressLine1 : ['', [Validators.required]],
  addressLine2: ['', [Validators.required]],
  postcode: ['', [Validators.required]],
  numberOfLicense: ['', [Validators.required]],
  validForm: ['', [Validators.required]],
  validTo: ['', [Validators.required]],
  status: ['', [Validators.required]],
  support: ['', [Validators.required]],
  controllerChangeLimit: ['', [Validators.required]],
  updateBackground: ['', [Validators.required]]
});

}
onSubmit() {
    this.show = true;
    this.submitted = true;
    if (this.companyForm.invalid) {
      return;
    }
    console.log(this.companyForm.value);
}
  confirmationPopUp() {
    this.modalService.open(ConfirmationPopupComponent);
  }

}
