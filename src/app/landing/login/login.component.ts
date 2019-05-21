import { Component, OnInit } from '@angular/core';

import { Token } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  // tslint:disable-next-line:variable-name
  constructor(private _router: Router ) { }

  ngOnInit() {
    this.getList();

  }
  getList() {

  }

  loginUser() {
    const books = { email: this.email, password: this.password };
    console.log(this.email , this.password);


    // this._router.navigate(['administrator/admin']);
      }



  goToAdmin() {
    this._router.navigate(['administrator/admin']);
  }
}
