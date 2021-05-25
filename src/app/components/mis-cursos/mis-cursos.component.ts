import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mis-cursos',
  templateUrl: './mis-cursos.component.html',
  styleUrls: ['./mis-cursos.component.scss']
})
export class MisCursosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addCourse() {
    this.router.navigateByUrl('/cursos-nuevos');
  };

  detailCourse() {
    this.router.navigateByUrl('/curso');
  };

}
