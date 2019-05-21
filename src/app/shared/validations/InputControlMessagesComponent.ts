import {Component, Input} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ValidationService} from './validationServices';
import {Utility} from '../utils/utility';



@Component({
  selector: 'control-messages',
  template: `
    <div class="error">
      <div *ngIf="errorMessage !== null">{{errorMessage}}</div>
    </div>`,
  styleUrls: [],
})

export class InputControlMessagesComponent {
  @Input() control: FormControl;
  @Input() inputElmControl;

  constructor() {
  }

  /**
   * This function is returning error message.
   * @returns {any}
   */
  get errorMessage() {
    if (!Utility.isUndefined(this.control)) {
      for (const propertyName in this.control.errors) {
        if (this.control.errors.hasOwnProperty(propertyName) && this.control.dirty) {
          return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]
            , this.control.errors, this.inputElmControl);
        }
      }
      return null;
    }
  }
}

