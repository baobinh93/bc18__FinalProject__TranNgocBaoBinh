import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Variable } from '../variable';
@Injectable({
  providedIn: 'root',
})
export class LocationService {
  Variable: Variable;
  constructor(private https: HttpClient) {
    this.Variable = new Variable();
  }

  // tao vi tri
  createNewLocation(
    name: string,
    province: string,
    country: string,
    valueate: number,
    token: string = ''
  ) {
    let params = {
      name,
      province,
      country,
      valueate,
    };
    return this.https.post<any>(
      this.Variable.BaseUrl + 'api/locations/',
      params,
      {
        headers: {
          ...this.Variable.Headers,
          token: token,
        },
      }
    );
  }

  // Xoa Vi Tri
  deleteLocation(_id: string, token: string) {
    return this.https.delete<any>(
      this.Variable.BaseUrl + 'api/locations/' + _id,

      {
        headers: {
          ...this.Variable.Headers,
          token: token,
        },
      }
    );
  }
  // Lay Danh Sach Vi Tri
  getAllLocations(_limit: string = '0') {
    return this.https.get<any>(
      this.Variable.BaseUrl + 'api/locations?limit=' + _limit,
      {
        headers: {
          ...this.Variable.Headers,
        },
      }
    );
  }
  // Lay Thong Tin Chi Tiet Vi Tri
  getInfoLocation(_id: string) {
    return this.https.get<any>(this.Variable.BaseUrl + 'api/locations/' + _id, {
      headers: {
        ...this.Variable.Headers,
      },
    });
  }
  // Cap nhat thong tin chi tiet vi tri
  updateInfoLocation(
    id: string,
    name: string,
    province: string,
    country: string,
    valueate: number,
    token: string = ''
  ) {
    let params = {
      name,
      province,
      country,
      valueate,
    };
    return this.https.put<any>(
      this.Variable.BaseUrl + 'api/locations/' + id,
      params,
      {
        headers: {
          ...this.Variable.Headers,
          token: token,
        },
      }
    );
  }
  // Cap nhat Anh cho vi tri
  // Su dung Formdata
  updateImgLocation(_img: File, _id: string, _token: string) {
    const formData = new FormData();
    formData.append('location', _img);
    return this.https.post<any>(
      this.Variable.BaseUrl + 'api/locations/upload-images/' + _id,
      formData,
      {
        headers: {
          ...this.Variable.Headers,
          token: _token,
        },
      }
    );
  }
  // Lay danh sach vi tri theo danh gia nguoi dung
  getLocationByValueate(_valueate: number = 5) {
    return this.https.get<any>(
      this.Variable.BaseUrl + 'api/locations/by-valueate?valueate=' + _valueate,

      {
        headers: {
          ...this.Variable.Headers,
        },
      }
    );
  }
}
