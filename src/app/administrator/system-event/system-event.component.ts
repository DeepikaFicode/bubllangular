import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {InputControls} from '../../shared/validations/InputControls';
import {NavigateUrls} from '../../shared/utils/NavigateUrls';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute, Router} from '@angular/router';
import {ExcelService} from '../../shared/excelService/excel.service';


@Component({
  selector: 'app-system-event',
  templateUrl: './system-event.component.html',
  styleUrls: ['./system-event.component.css']
})
export class SystemEventComponent implements OnInit {


  systemEvent = [{
    row: '1',
    userName: 'deepika',
    deviceName: 'test@gmail.com',
    roomName: 'livingRoom',
    objectName: 'FanSpeed',
    objectStatus: '66.0',
    dateTime: '31/05/2019',

  },
    {
      row: '2',
      userName: 'nitin',
      deviceName: 'nitin@gmail.com',
      roomName: 'livingRoom',
      objectName: 'FanSpeed',
      objectStatus: '69.0',
      dateTime: '20/06/2019',
    }


  ];
  filterData;
  constructor( private excelService: ExcelService, ) {
    this.filterData = this.systemEvent;
  }
  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.systemEvent, 'sample');
  }

  ngOnInit() {
  }

  filterById(value) {
    this.filterData = this.systemEvent.filter((moredata) => {
      return moredata.dateTime.toLowerCase().indexOf(value.toLowerCase()) > -1;
    });
  }

  filterByName(value) {
    this.filterData = this.systemEvent.filter((moredata) => {
      return moredata.dateTime.toLowerCase().indexOf(value.toLowerCase()) > -1;
    });
  }

}
