import { Component, OnInit } from '@angular/core';
import { CompanyService} from '../shared/services/companyService/company.service';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {

  constructor(private service: CompanyService) { }

  ngOnInit() {}

}
