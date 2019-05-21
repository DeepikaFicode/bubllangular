import {__param, __values} from 'tslib';

export class Utility {

  /**
   * This function is used to check 'null' condition
   * @param value
   * @return boolean
   */

  public static isNull(value) {
    if (value === null) {
      return true;
    } else {
      return false;
    }
  }

    /**
     * This function is used to check 'undefined' condition
     * @param value
     * @return boolean
     */
  public static isUndefined(value) {
      if (value === void 0) {
        return true;
      } else {
        return false;
      }
    }
      /**
       * This function is used to check empty string ('' or " ")  condition.
       * @param value
       * @return boolean
       */
    public static isEmptyString(value) {
        if (value === '') {
          return true;
        } else {
          return false;
        }
      }
}
