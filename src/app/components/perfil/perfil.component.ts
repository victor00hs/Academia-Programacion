import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  public isCollapsedAcademic = true;
  public isCollapsedEconomic = true;
  public isCollapsedCourses = true;
  public isCollapsedPreviousCourses = true;

  constructor() { }

  ngOnInit(): void {
  }

}
