import {environment} from '../../../environments/environment';


export class IConstants {
  public static WEB_SERVER_BASE_URL = environment.WEB_SERVER_BASE_URL;
  public static X_ACCESS_TOKEN = 'x-access-token';
  public static COMPANYID = 'companyId';
  public static USERID = 'userId';
  public static ROLE_ID = 'roleId';
  public static NO_RECORD = 'No record found yet.';
  public static DELETE_ACTION = 'delete';
  public static APPROVAL_STATUS = 'approval-status';
  public static STATUS_CHANGE_MESSAGE = 'Do you really want to change status?';
  public static DELETE_MESSAGE = 'Do you really want to delete?';
  public static APPROVAL_MESSAGE = 'Do you really want to';
  public static COMPANY_ADMIN = 'Company Admin';
  public static HTTPS = 'https://';
  public static SESSION_OBJECT = 'sessionObject';
  public static CompanyAction = 'Do you want to change company from Active to Dormant ?';
  public static DELETE_2ND_CONFIRMATION = 'Are you sure?';

}
