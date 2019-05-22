import { Component, Input, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {IConstants} from '../IConstants';
@Component({
  selector: 'app-confirmation-popup',
  templateUrl: './confirmation-popup.component.html',
  styleUrls: ['./confirmation-popup.component.css']
})
export class ConfirmationPopupComponent implements OnInit {
  @Input() public action;
  confirmText = IConstants.CompanyAction;

  constructor(private activeModal: NgbActiveModal) {
  }

  ngOnInit() {
    if (this.action === IConstants.CompanyAction) {
      this.confirmText = IConstants.DELETE_2ND_CONFIRMATION;
    } else if (this.action === IConstants.DELETE_ACTION) {
      this.confirmText = IConstants.DELETE_MESSAGE;
    } else if (this.action === IConstants.APPROVAL_STATUS) {
      this.confirmText = IConstants.APPROVAL_MESSAGE + ' approve?';
    }

  }
  /**
   * Method used to close the modal
   */
  noPressed() {
    this.activeModal.close({isYesPressed: false});
  }

  yesPressed() {
    this.activeModal.close({isYesPressed: true});
  }
}
