import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {InputControls} from '../../shared/validations/InputControls';
import {NavigateUrls} from '../../shared/utils/NavigateUrls';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute, Router} from '@angular/router';
import {ExcelService} from '../../shared/excelService/excel.service';


@Component({
  selector: 'app-wellbeing',
  templateUrl: './wellbeing.component.html',
  styleUrls: ['./wellbeing.component.css']
})
export class WellbeingComponent implements OnInit {


  wellbeing = [{
    row: '1',
    userName: 'deepika',
    deviceName: 'tab',
    dateTime: '31/05/2019',
    latitude: '30.6759',
    longitude: '30.6759',
    address: 'Address not found',
    option: 'Too Cold',
    Comment: 'Awesome',
    roomName: 'bedroom1',

  },
    {
      row: '1',
      userName: 'nitin',
      deviceName: 'tab',
      dateTime: '31/05/2019',
      latitude: '30.6759',
      longitude: '30.6759',
      address: 'Address not found',
      option: 'Too Hot',
      Comment: 'Awesome',
      roomName: 'livingRoom',
    }
  ];

  constructor( private excelService: ExcelService, ) { }
  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.wellbeing, 'sample');
  }

  ngOnInit() {
  }

}
