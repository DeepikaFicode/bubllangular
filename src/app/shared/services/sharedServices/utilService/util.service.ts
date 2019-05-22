import { Injectable } from '@angular/core';
// tslint:disable-next-line:import-spacing
import  * as jwt_decode from 'jwt-decode';
import {IConstants} from '../../../utils/IConstants';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  /*This function is used to generate Universal Unique identifiers(uuid)*/
  generateUUId() {
    return (
      this.stringValue() +
      this.stringValue() +
      '-' +
      this.stringValue() +
      '-' +
      this.stringValue() +
      '-' +
      this.stringValue() +
      '-' +
      this.stringValue() +
      this.stringValue() +
      this.stringValue()
    );
  }

  /*This function is used to decode JWT encode Token
   * @param{token:string}
   * */
  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

  /*This function will generate unique randomaly string values */
  private stringValue() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

}
