import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public usuario: Usuario;
  public show_data: any;

  constructor() {
    this.usuario = new Usuario('','','','');
  }

  ngOnInit() {
  }

  onSubmit(form: any){
    console.log("Evento submit lanzado!!");
    this.show_data = this.usuario;
    console.log(this.show_data);
    //form.reset();
  }
}
