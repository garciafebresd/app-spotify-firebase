import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private API_KEY = 'XXXXXXXXXXXXXXXXXXXXXXXXX';
  private fireToken: string;

  constructor(private http: HttpClient) {
    this.getToken();
  }

  //CREAR USUARIO
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
  login(usuario: UserModel) {

    const dataLogin = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    };

    const requestUrl = `${this.url}signInWithPassword?key=${this.API_KEY}`;

    return this.requestPost(requestUrl, dataLogin);
  }

  //LOGIN USUARIO
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
  register(usuario: UserModel) {
    const dataRegister = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    };

    const requestUrl = `${this.url}signUp?key=${this.API_KEY}`;

    return this.requestPost(requestUrl, dataRegister);
  }


  logout() {

  }

  private setToken(idToken: string) {

    this.fireToken = idToken;
    localStorage.setItem('fireToken', idToken);
  }

  private getToken() {

    if (localStorage.getItem('fireToken')) {
      this.fireToken = localStorage.getItem('fireToken');
    } else {
      this.fireToken = '';
    }

    return this.fireToken;

  }

  requestPost(requestUrl: string, objectData: any) {

    return this.http.post(requestUrl, objectData)
      .pipe(
        map(response => {

          this.setToken(response['idToken']);
          return response;

        })
      );

  }

}
