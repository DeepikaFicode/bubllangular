import { AbstractControl} from '@angular/forms';
import { CustomRegex } from './customRegex';
import { ErrorMessage } from './errorMessage';
import {Utility} from '../utils/utility';



export class ValidationService {
  /**
   * This function returns dynamic messages according input fields.
   * @param {string} validatorName
   * @param validatorValue
   * @param controlError
   * @param inputElmControl
   * @returns {any}
   */



  public static getValidatorErrorMessage(validatorName: string, validatorValue?: any, controlError?: any, inputElmControl?: any) {

    const message = controlError.message;
    const value = controlError.value;
    const config = {
      required: inputElmControl.value + ' ' + ErrorMessage.required,
      invalidEmailAddress: ErrorMessage.invalidEmail,
      invalidPassword: message,
      minlength: `Minimum length ${validatorValue.requiredLength}`,
      passwordMismatch: ErrorMessage.passwordMismatch,
      invalidNumber: ErrorMessage.invalidNumber,
      invalidAlphabet: ErrorMessage.invalidAlphabet,
      numericRequired: ErrorMessage.numericRequired,

    };

    return config[validatorName];
  }


  /**
   * email validation
   * @param control
   * @returns {any}
   */

  public static emailValidator(control) {

    if (control.value !== undefined && control.value.match(CustomRegex.email)) {
      return null;
    } else {
      return {
        invalidEmailAddress: true
      };
    }
  }

  public static passwordValidator(control) {
    if (!control.value || control.value.match(CustomRegex.password)) {
      return null;
    } else {
      return {
        invalidPassword: true,
        message: ErrorMessage.passwordPattern,
        value: control.value
      };
    }
  }

  public static required(control) {
    // RFC 2822 compliant regex
    if (!control || !control.value || !control.value) {
      return {
        required: true,
        message: ErrorMessage.required,
        value: control.value
      };
    } else {
      return null;
    }
  }


  public static selectRequired(control) {
    if (!control || control.value) {
      return {
        required: true,
        message: ErrorMessage.required,
        value: control.value
      };
    } else {
      return null;
    }
  }

  /**
   * Confirm password match with password
   * @param controlConfirm confirm password field control
   * @param compareControl password field control
   * @returns AbstractControl
   */
  public static matchPassword(controlConfirm, compareControl?: any) {
    return (control: AbstractControl): { [key: string]: any } | null => {
      return controlConfirm.value !== compareControl.value ? {
        passwordMismatch: true
      } : null;
    };
  }

  /**
   * Confirm password match with password
   * @param controlConfirm confirm password field control
   * @param compareControl password field control
   */
  public static matchPasswordManually(controlConfirm, compareControl?: any) {
    if (controlConfirm.value !== compareControl.value) {
      controlConfirm.errors = {
        passwordMismatch: true
      };
      return false;
    }
    return true;
  }


  /**
   * This function is useed to check number values in input field.
   * @param control
   */
  public static allowNumberOnly(control) {
    if (control.value === undefined || control.value === '' || control.value.match(CustomRegex.allowNumberOnly)) {
      return null;
    } else {
      return {invalidNumber: true};
    }
  }

  /**
   * This function is used to allow Alphabets (uppercase + lowercase) and numeric with space
   * @param control
   */
  public static allowAlphaNumericSpace(control) {
    if (control.value != null && control.value.match(CustomRegex.allowAlphaNumericSpace)) {
      return null;
    } else {
      return {invalidAlphabet: true};
    }
  }
}


