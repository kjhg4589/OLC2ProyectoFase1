import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {


  public texto = '';
  constructor() {
  }

  ngOnInit(): void {
  }

  traducir(): void {
    console.log(this.texto);
  }

  ejecutar(): void {
    console.log(this.texto);
  }



}
