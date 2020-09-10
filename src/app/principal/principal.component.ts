import { Component, OnInit } from '@angular/core';

declare var grammar: any;

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
    console.log(grammar.parse(this.texto));
  }

  ejecutar(): void {
    console.log(this.texto);
  }



}
