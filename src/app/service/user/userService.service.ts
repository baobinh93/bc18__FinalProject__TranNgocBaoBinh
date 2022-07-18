import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Variable } from '../variable';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  Variable: Variable;
  // token: string | null = localStorage.getItem('adminToken');
  // lay thong tin chi tiet nguoi dung
  getUserInfo(_id: string) {
    return this.https.get<any>(this.Variable.BaseUrl + 'api/users/' + _id, {
      headers: this.Variable.Headers,
    });
  }
  // tao nguoi dung
  createNewUser(
    name: string = 'La Thuy',
    email: string = 'thuy@gmail.com',
    password: string = 'thuy0159',
    phone: string = '0934657867',
    birthday: string = '1998-05-11',
    gender: boolean = true,
    type: string = 'ADMIN',
    address: string = 'An Giang'
  ) {
    let params = {
      name,
      email,
      password,
      phone,
      birthday,
      gender,
      type,
      address,
    };
    console.log(params);
    return this.https.post<any>(this.Variable.BaseUrl + 'api/users', params, {
      headers: this.Variable.Headers,
    });
  }
  // lay danh  sach nguoi dung
  getAllUsers(_skip: number = 0, _limit: number = 3) {
    return this.https.get<any>(
      this.Variable.BaseUrl +
        'api/users/' +
        'pagination?skip=' +
        _skip +
        '&limit=' +
        _limit,
      {
        headers: this.Variable.Headers,
      }
    );
  }
  //xoa nguoi dung
  deleteUser(_id: string, token: string = '') {
    return this.https.delete<any>(this.Variable.BaseUrl + 'api/users/' + _id, {
      headers: {
        ...this.Variable.Headers,
        token: token,
      },
    });
  }
  // Cap nhat Thong Tin Nguoi Dung
  updateUserInfo(
    id: string = '',
    name: string = '',
    email: string = '',

    phone: string = '',
    birthday: string = '',
    gender: boolean = true,
    type: 'ADMIN' | 'CLIENT',
    address: string = '',
    token: string = ''
  ) {
    let params = {
      name,
      email,

      phone,
      birthday,
      gender,
      type,
      address,
    };
    return this.https.put<any>(
      this.Variable.BaseUrl + 'api/users/' + id,
      params,
      {
        headers: { ...this.Variable.Headers, token: token },
      }
    );
  }
  // Cap Nhat Anh Dai Dien
  updateAvataUser(_fileImg: File, token: string = '') {
    // let params = { avata: _fileImg };
    const formData = new FormData();

    formData.append('avatar', _fileImg);
    return this.https.post<any>(
      this.Variable.BaseUrl + 'api/users/upload-avatar',
      formData,
      {
        headers: { ...this.Variable.Headers, token: token },
      }
    );
  }
  constructor(private https: HttpClient) {
    this.Variable = new Variable();
  }
}
