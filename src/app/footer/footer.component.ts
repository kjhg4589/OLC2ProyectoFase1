import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public autor: any = {nombre: 'Kevin', apellido: 'Hernandez'};
  public rel = 0.1;
  public fecha = new Date();
  public ano = this.fecha.getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
