import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {InputControls} from '../../validations/InputControls';
import {NavigateUrls} from '../../utils/NavigateUrls';
import {CompanyService} from '../../services/companyService/company.service';
import {UtilService} from '../../services/sharedServices/utilService/util.service';

@Component({
  selector: 'app-manual-documents',
  templateUrl: './manual-documents.component.html',
  styleUrls: ['./manual-documents.component.css']
})
export class ManualDocumentsComponent implements OnInit {

  manualDocumentForm: FormGroup;
  public inputControls = InputControls;
  public navigateUrls = NavigateUrls;
  show = false;
  submitted = false;


  data: any = [{
    rowid: '1',
    doctitle: 'DocTestTitle',
    fuDocument: '',
  },
    {
      rowid: '1',
      doctitle: 'DocTestTitle',
      fuDocument: '',

    }];
  filterData;
  constructor(private formBuilder: FormBuilder,
              private companyService: CompanyService,
              private utilService: UtilService,
              private route: ActivatedRoute,
              private router: Router, ) {
              this.filterData = this.data;
  }

  ngOnInit() {
    this.manualDocumentForm = this.formBuilder.group ({
      doctitle : ['', [Validators.required]],
      fuDocument : ['', [Validators .required]],

    });
  }

  onSubmit() {
    this.show = true;
    this.submitted = true;
    if (this.manualDocumentForm.invalid) {
      return;
    }
    console.log(this.manualDocumentForm.value);
  }

  filterByTitle(value) {
    this.filterData = this.data.filter((moredata) => {
      return moredata.doctitle.toLowerCase().indexOf(value.toLowerCase()) > -1;
    });
  }


  onFileChange(event) {
    console.log(event);
  }

}
