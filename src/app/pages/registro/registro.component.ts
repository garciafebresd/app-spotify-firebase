import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UserModel;

  constructor() { }

  ngOnInit() {

    this.usuario = new UserModel();

  }

  onSubmit(formRegistro: NgForm) {

    if (formRegistro.invalid) { return; }

    console.log('Formulario onSubmit()');
    console.log(this.usuario);
  }

}
