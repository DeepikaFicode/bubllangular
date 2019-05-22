import {Injectable} from '@angular/core';
import {Company} from '../../../models/Company';

@Injectable()
export abstract class CompanyInterfaceService {
  /*Create APi Implemantation
   * @param{Company}
   * @return {Observable: response}
   * */
  abstract createCompany(company: Company): {};
}


