import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';

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

    this.usuario.email = 'garciafebresd@gmail.com';
   }

   onSubmit() {
    console.log('Formulario onSubmit()');
    console.log(this.usuario);
   }

}
