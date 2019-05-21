import { ApiRequest } from '../../shared/DTO/ApiRequest';

export class SupportLogin extends ApiRequest {
  email: string;
  password: string;
}
