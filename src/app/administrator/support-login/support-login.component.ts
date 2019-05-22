import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { InputControls } from '../../shared/validations/InputControls';
import {CommonService} from '../../shared/services/sharedServices/commonService/common.service';
import {SupportLogin} from './supportLogin';
import {ValidationService} from '../../shared/validations/validationServices';
import {AuthService} from '../../services/auth.service';
@Component({
  selector: 'app-support-login',
  templateUrl: './support-login.component.html',
  styleUrls: ['./support-login.component.css']
})
export class SupportLoginComponent implements OnInit {


  public support = new SupportLogin();
  SupportLoginForm: FormGroup;
  public isError = false;
  public inputControls = InputControls;
  submitted = false;
  emailErrorMessage: any;
  passwordErrorMessage: any;
  constructor( private formBuilder: FormBuilder,
               private route: ActivatedRoute,
               private router: Router, private activeModal: NgbActiveModal,
               private authService: AuthService,
               modal: NgbModal, private commonService: CommonService  ) { }

  ngOnInit() {
    this.validateSupprotForm();
  }
  forgotPassword() {
    this.activeModal.close();
    // this.modal.open(ForgotpasswordComponent);
  }

  closeModal() {
    this.activeModal.close();
  }

  get formValues() {
    return this.SupportLoginForm.controls;
  }



  validateSupprotForm() {
    this.SupportLoginForm = this.formBuilder.group({
      email: ['', [ValidationService.required, ValidationService.emailValidator ]],
      password: ['', [ValidationService.required, ValidationService.passwordValidator]]
    });
  }

  onSubmit() {
    this.support.email = this.formValues.email.value;
    this.support.password = this.formValues.password.value;
    this.submitted = true;
    this.activeModal.close();
    this.router.navigate(['/dashboard']);
    this.authService.supportLogin().subscribe(response => {
      if (response.success) {
        this.commonService.setAccessToken(JSON.stringify(response.token));
        this.router.navigate(['/dashboard']);
      } else {
        this.isError = true;
      }
    });
  }
}
