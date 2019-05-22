import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {InputControls} from '../../shared/validations/InputControls';
import {NavigateUrls} from '../../shared/utils/NavigateUrls';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute, Router} from '@angular/router';
import {ConfirmationPopupComponent} from '../../shared/utils/confirmation-popup/confirmation-popup.component';
import {SupportLogin} from '../support-login/supportLogin';
import {SupportLoginComponent} from '../support-login/support-login.component';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  adminForm: FormGroup;
  public inputControls = InputControls;
  public navigateUrls = NavigateUrls;
  emailvalue: any;

  Customvar = [{
    companyId: 'coo23',
    companyName: 'test',
    email: 'test@gmail.com',
    noOfLIcensedSite: '20',
    validFrom: '07/05/2019',
    validTo: '31/05/2019',

  },
    {
      companyId: 'coo24',
      companyName: 'testCompany',
      email: 'deepika@gmail.com',
      noOfLIcensedSite: '20',
      validFrom: '07/05/2019',
      validTo: '31/05/2019',
    }
  ];
  filterData;

  constructor(private route: ActivatedRoute, private modalService: NgbModal, private router: Router) {
    this.filterData = this.Customvar;
  }
  ngOnInit() {

  }

  filterById(value) {
    this.filterData = this.Customvar.filter((moredata) => {
      return moredata.companyId.toLowerCase().indexOf(value.toLowerCase()) > -1;
    });
  }

  filterByName(value) {
    this.filterData = this.Customvar.filter((moredata) => {
      return moredata.companyName.toLowerCase().indexOf(value.toLowerCase()) > -1;
    });
  }

  filterByEmail(value) {
    this.filterData = this.Customvar.filter((moredata) => {
      return moredata.email.toLowerCase().indexOf(value.toLowerCase()) > -1;
    });
  }

  goToSupportLogin() {
    this.modalService.open(SupportLoginComponent);
  }

  goToProfile() {
    this.router.navigate(['administrator/profile']);
  }

  goToCompany() {
    this.router.navigate(['administrator/create']);
  }
}
