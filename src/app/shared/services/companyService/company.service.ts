
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {BubllURLS} from '../../utils/BubllURLS';
import {Company} from '../../../models/Company';
import {CompanyInterfaceService} from './company-interface.service';
import {ApiService} from '../api.service';


@Injectable({
  providedIn: 'root'
})
export class CompanyService implements CompanyInterfaceService {
  constructor(private apiService: ApiService) {
  }

  /**
   * Create APi Implemantation
   * @param company
   * @return {Observable: response}
   */
  createCompany(company: Company): Observable<any> {
    return this.apiService.post(BubllURLS.CREATE_COMPANY, company);
  }

  /**
   * Update Company APi Implemantation
   * @param company
   * @return {Observable: response}
   */
  updateComapany(company: Company): Observable<any> {
    return this.apiService.put(BubllURLS.UPDATE_COMPANY, company);

  }
}









