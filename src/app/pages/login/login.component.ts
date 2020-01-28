import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UserModel;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.usuario = new UserModel();
  }

  login(formRegistro: NgForm) {

    if (formRegistro.invalid) { return; }

    Swal.fire({
      allowOutsideClick: false,
      type: 'info',
      text: 'Espere por favor'
    });
    Swal.showLoading();

    this.authService.login(this.usuario).subscribe(response => {

      Swal.close();

    }, (err) => {
      console.log(err.error.error.message);

      Swal.fire({
        type: 'error',
        title: 'Error al autenticar',
        text: 'Email o password invalidos'
      });
    });
  }
}
