import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public usuario: Usuario;

  constructor() {
    this.usuario = new Usuario('','','','');
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log("Evento submit lanzado!!");
    console.log(this.usuario);
  }
}
