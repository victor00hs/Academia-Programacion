import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit {

  public isCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

  volverIndice(): void {
    window.scrollTo(0,0);
  }
}
