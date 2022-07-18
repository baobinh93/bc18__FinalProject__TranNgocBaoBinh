import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Variable } from '../variable';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  Variable: Variable;
  constructor(private https: HttpClient) {
    this.Variable = new Variable();
  }
  // Dang Nhap
  signIn(email: string, password: string) {
    let params = {
      email,
      password,
    };
    return this.https.post<any>(
      this.Variable.BaseUrl + 'api/auth/login',
      params,
      {
        headers: {
          ...this.Variable.Headers,
        },
      }
    );
  }
  // Dang Ky
  signUp(
    name: string,
    email: string,
    password: string,
    phone: string,
    birthday: string,
    gender: boolean,
    address: string
  ) {
    let params = { name, email, password, phone, birthday, gender, address };
    return this.https.post<any>(
      this.Variable.BaseUrl + 'api/auth/register',
      params,
      {
        headers: {
          ...this.Variable.Headers,
        },
      }
    );
  }
}
