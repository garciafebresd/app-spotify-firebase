import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UserModel;

  constructor() { }

  ngOnInit() {
    this.usuario = new UserModel();
  }

  login(formRegistro: NgForm) {

    if (formRegistro.invalid) { return; }

    console.log('Formulario login');
    console.log(formRegistro);
  }
}
