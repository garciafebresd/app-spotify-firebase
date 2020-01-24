import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts';
  private API_KEY = 'AIzaSyDQDoNn3swVlrNokqOL-Q8EcfevvBiwQxg';


  constructor(private http: HttpClient) { }

  login(usuario: UserModel) {

  }

  logout() {

  }

  register(usuario: UserModel) {

  }

  //CREAR USUARIO
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  //LOGIN USUARIO
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

}
