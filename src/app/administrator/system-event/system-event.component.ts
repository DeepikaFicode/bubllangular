import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {InputControls} from '../../shared/validations/InputControls';
import {NavigateUrls} from '../../shared/utils/NavigateUrls';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute, Router} from '@angular/router';
import {ExcelService} from '../../shared/excelService/excel.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-system-event',
  templateUrl: './system-event.component.html',
  styleUrls: ['./system-event.component.css']
})
export class SystemEventComponent implements OnInit {
  fromdate:Date;
  todate:Date;
  //@ViewChild('ref') signupForm: NgForm; 
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

  registeredUser(){    
    this.filterByDates(this.fromdate,this.todate);     
  }

  filterByDates(fromDate,Todate) {
    var date1 = new Date(fromDate);
    var date2 = new Date(Todate);
   
    if (date1.getTime() > date2.getTime()) {
      alert("The first date is after the second date!");
    }else{
      this.filterData = this.systemEvent.filter((moredata) => {
        var arrayDate = this.convertDate(moredata.dateTime);
        if( (arrayDate.getTime() > date1.getTime() ) && ( arrayDate.getTime() < date2.getTime() ) ){         
          return moredata;
        }
      });
    }
   }

   convertDate(dateToConvert){
    var pattern = /(\d{2})\/(\d{2})\/(\d{4})/;
    var dt = new Date(dateToConvert.replace(pattern,'$3-$2-$1'));
    return dt;
  }

}
