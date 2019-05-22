import {Injectable} from '@angular/core';
import {IConstants} from '../../../utils/IConstants';
import {UtilService} from '../utilService/util.service';



@Injectable({
  providedIn: 'root'
})
export class CommonService {
// private storage = sessionStorage;
  private storage = localStorage;
  constructor(private utilService: UtilService) { }

  getAccessToken(): any {
    return this.storage.getItem(IConstants.X_ACCESS_TOKEN);
  }

  /**
   * This method is use for set Access Token to local storage data.
   * @param {data:any}
   */
  setAccessToken(data: any) {
    return this.storage.setItem(IConstants.X_ACCESS_TOKEN, data);
  }
  /**
   * This method is use for Super user SESSION_OBJECT to local storage data.
   * @param {data:any}
   */
  setUserInformation(data: any) {
    return this.storage.setItem(IConstants.SESSION_OBJECT, data);
  }
  /**
   * This method is use for USER ID  from local storage data.
   */
  getCreatedUserId(): any {
    return this.storage.getItem(IConstants.SESSION_OBJECT);
  }

  /**
   * This method is use for Super USER ID to local storage data.
   * @param {data:any}
   */
  setCreatedUserId(data: any) {
    return this.storage.setItem(IConstants.SESSION_OBJECT, data);
  }

  /*Clear Local storage for logout*/
  clearLocalStorage() {
    this.storage.removeItem(IConstants.X_ACCESS_TOKEN);
    this.storage.removeItem(IConstants.SESSION_OBJECT);
    this.storage.removeItem(IConstants.COMPANYID);
    this.storage.removeItem(IConstants.USERID);
  }

  /**
   *  This method will give company Id
   */
  getCompanyId(): any {
    return this.storage.getItem(IConstants.COMPANYID);
  }

  /**
   * This function  will store company Id {sid}
   * @param data
   */
  setCompanyId(data: any) {
    this.storage.setItem(IConstants.COMPANYID, data);
  }

}


