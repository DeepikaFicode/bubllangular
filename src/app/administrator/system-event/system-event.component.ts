import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {InputControls} from '../../shared/validations/InputControls';
import {NavigateUrls} from '../../shared/utils/NavigateUrls';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute, Router} from '@angular/router';
import {ExcelService} from '../../shared/excelService/excel.service';
import {ConfirmationPopupComponent} from '../../shared/utils/confirmation-popup/confirmation-popup.component';
import {IModalContent, ModalService} from '../../shared/modal/modal.service';



@Component({
  selector: 'app-system-event',
  templateUrl: './system-event.component.html',
  styleUrls: ['./system-event.component.css']
})
export class SystemEventComponent implements OnInit {
  fromdate;
  todate;
  filterData;

  systemEvent = [{
    row: '1',
    userName: 'deepika',
    deviceName: 'test@gmail.com',
    roomName: 'livingRoom',
    objectName: 'FanSpeed',
    objectStatus: '66.0',
    dateTime: '05/31/2019',

  },
    {
      row: '2',
      userName: 'nitin',
      deviceName: 'nitin@gmail.com',
      roomName: 'livingRoom',
      objectName: 'FanSpeed',
      objectStatus: '69.0',
      dateTime: '06/20/2019',
    }

  ];

  modalVisible = false;
  modalVisibleAnimate = false;
  modalContent: IModalContent = {};
  cancel: () => void;
  ok: () => void;
  defaultModalContent: IModalContent = {
    header: 'Please Confirm',
    body: 'Are you sure you want to continue?',
    cancelButtonText: 'Cancel',
    OKButtonText: 'OK',
    cancelButtonVisible: true
  };
  modalContent: IModalContent = {

    header: 'Lose Unsaved Changes?',
    body: 'You have unsaved changes! Would you like to leave the page and lose them?',
    cancelButtonText: 'Cancel',
    OKButtonText: 'Leave'
  };

  constructor( private excelService: ExcelService, private modalService: ModalService ) {
    this.filterData = this.systemEvent;
    modalService.show = this.show.bind(this);
    modalService.hide = this.hide.bind(this);
  }

  ngOnInit() {
    this.modalService.show(this.modalContent);
  }
  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.systemEvent, 'sample');
  }

// searchbetweenthedates() {
//   this.filterData = this.systemEvent.filter((m) => {
//     const pattern = /(\d{2})\/(\d{2})\/(\d{4})/;
//     // tslint:disable-next-line:no-unused-expression
//     new Date(m.dateTime.replace(pattern, '$3-$2-$1')) >= new Date(this.fromdate.replace(pattern, '$3-$2-$1'))
//     && new Date(m.dateTime.replace(pattern, '$3-$2-$1'))
//     <= new Date(this.todate.replace(pattern, '$3-$2-$1'));
//   });
// }



  show(modalContent: IModalContent) {
    this.modalContent = Object.assign(this.defaultModalContent, modalContent);
    this.modalVisible = true;
    setTimeout(() => this.modalVisibleAnimate = true);

    const promise = new Promise<boolean>((resolve, reject) => {
      this.cancel = () => {
        this.hide();
        resolve(false);
      };
      this.ok = () => {
        this.hide();
        resolve(true);
      };
    });
    return promise;
  }
  hide() {
    this.modalVisibleAnimate = false;
    setTimeout(() => this.modalVisible = false, 300);
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

  searchUser() {
    this.filterByDates(this.fromdate, this .todate);
  }

  filterByDates(fromDate, Todate) {

    const date1 = new Date(fromDate);
    const date2 = new Date(Todate);

    if (date1.getTime() > date2.getTime()) {
      alert('The first date is after the second date!');
    } else {

      this.filterData = this.systemEvent.filter((moredata) => {
        const arrayDate = this.convertDate(moredata.dateTime);
        if ( (arrayDate.getTime() > date1.getTime() ) && ( arrayDate.getTime() < date2.getTime() ) ) {
          return moredata;
        }
      });
    }
  }

  convertDate(dateToConvert) {
    const pattern = /(\d{2})\/(\d{2})\/(\d{4})/;
    const dt = new Date(dateToConvert.replace(pattern, '$3-$2-$1'));
    return dt;
  }



}


