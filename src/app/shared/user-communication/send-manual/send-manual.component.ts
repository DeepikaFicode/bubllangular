import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {InputControls} from '../../validations/InputControls';
import {NavigateUrls} from '../../utils/NavigateUrls';
import {CompanyService} from '../../services/companyService/company.service';
import {UtilService} from '../../services/sharedServices/utilService/util.service';

@Component({
  selector: 'app-send-manual',
  templateUrl: './send-manual.component.html',
  styleUrls: ['./send-manual.component.css']
})
export class SendManualComponent implements OnInit {

sendManualForm: FormGroup;
  public inputControls = InputControls;
  public navigateUrls = NavigateUrls;
  show = false;
  submitted = false;

  data: any = [{
    rowid: '1',
    datetime: '07/05/2019',
    companyemail: 'testNotification@gmail.com',
    document: 'testdata',
    title: 'test',
    message: 'Notification',

  },

    {
      rowid: '1',
      datetime: '08/05/2019',
      companyemail: 'testdata@gmail.com',
      document: 'testdata',
      title: 'test',
      message: 'SendNotification',

    }];
  filterData;
  constructor( private formBuilder: FormBuilder,
               private companyService: CompanyService,
               private utilService: UtilService,
               private route: ActivatedRoute,
               private router: Router, ) {
               this.filterData = this.data;
  }


  ngOnInit() {
    this.sendManualForm = this.formBuilder.group ({
      title : ['', [Validators .required]],
      document : ['', [Validators.required]],
      message : ['', [Validators.required]],

    });
  }
  onSubmit() {
    this.show = true;
    this.submitted = true;
    if (this.sendManualForm.invalid) {
      return;
    }
    console.log(this.sendManualForm.value);
  }

  filterByTitle(value) {
    this.filterData = this.data.filter((moredata) => {
      return moredata.titles.toLowerCase().indexOf(value.toLowerCase()) > -1;
    });
  }
}
