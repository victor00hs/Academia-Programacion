import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images = ["https://itmastersmag.com/wp-content/uploads/2021/01/shutterstock_1078387013-scaled.jpg", 
            "https://haycanal.com/uploads/noticias/14949/Cualenguaje_programacion.jpg",
            "https://www.mejorconweb.com/images/programacion-web-barcelona.jpg"];

  constructor() { }

  ngOnInit(): void {
  }

}
