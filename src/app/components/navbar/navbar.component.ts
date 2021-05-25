import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navbarOpen = false;

  constructor(private _location: Location) { }

  back() {
    this._location.back();
  }

  ngOnInit(): void {
  }

  toggleNavbar(): void { this.navbarOpen = !this.navbarOpen; }

}
