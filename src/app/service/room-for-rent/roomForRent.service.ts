// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Variable } from '../variable';
// @Injectable({
//   providedIn: 'root',
// })
// export class RoomForRentService {
//   Variable: Variable;
//   constructor(private https: HttpClient) {
//     this.Variable = new Variable();
//   }
// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Variable } from '../variable';
@Injectable({
  providedIn: 'root',
})
export class RoomForRentService {
  Variable: Variable;
  constructor(private https: HttpClient) {
    this.Variable = new Variable();
  }
  // 16 -  Tao Phong Cho Thue
  createNewRoomForRent(
    name: string,
    guests: number,
    bedroom: number,
    bath: number,
    description: string,
    price: number,
    elevator: boolean = false,
    hotTub: boolean = false,
    pool: boolean = false,
    indoorFireplace: boolean = false,
    dryer: boolean = false,
    gym: boolean = false,
    kitchen: boolean = false,
    wifi: boolean = false,
    heating: boolean = false,
    cableTV: boolean = false,
    locationId: string,
    token: string
  ) {
    let params = {
      name,
      guests,
      bedroom,
      bath,
      description,
      price,
      elevator,
      hotTub,
      pool,
      indoorFireplace,
      dryer,
      gym,
      kitchen,
      wifi,
      heating,
      cableTV,
      locationId,
    };

    return this.https.post<any>(this.Variable.BaseUrl + 'api/rooms', params, {
      headers: {
        ...this.Variable.Headers,
        token: token,
      },
    });
  }
  // 17 Lay Danh Sach Phong Cho Thue
  // co the them skip va  limit nhung met roi :))
  getListRoomForRent() {
    return this.https.get<any>(this.Variable.BaseUrl + 'api/rooms', {
      headers: {
        ...this.Variable.Headers,
      },
    });
  }
  // 18 Lay Thong Tin Chi Tiet Phong Cho Thue
  getInfoRoomForRent(_id: string) {
    return this.https.get<any>(this.Variable.BaseUrl + 'api/rooms/' + _id, {
      headers: {
        ...this.Variable.Headers,
      },
    });
  }

  // 19 Cap Nhat thong tin phong cho thue

  updateInforRoomForRent(
    name: string,
    guests: number,
    bedRoom: number,
    bath: number,
    description: string,
    price: number,
    elevator: boolean,
    hotTub: boolean,
    pool: boolean,
    indoorFireplace: boolean,
    dryer: boolean,
    gym: boolean,
    kitchen: boolean,
    wifi: boolean,
    heating: boolean,
    cableTV: boolean,
    locationId: string,
    _idRoomForRent: string,
    token: string
  ) {
    let params = {
      name,
      guests,
      bedRoom,
      bath,
      description,
      price,
      elevator,
      hotTub,
      pool,
      indoorFireplace,
      dryer,
      gym,
      kitchen,
      wifi,
      heating,
      cableTV,
      locationId,
    };
    return this.https.put<any>(
      this.Variable.BaseUrl + 'api/rooms/' + _idRoomForRent,
      params,
      {
        headers: {
          ...this.Variable.Headers,
          token: token,
        },
      }
    );
  }

  // 20 - Xoa phong cho thue
  deleteRoomForRent(_idRoomForRent: string, _token: string) {
    return this.https.delete<any>(
      this.Variable.BaseUrl + 'api/rooms/' + _idRoomForRent,

      {
        headers: {
          ...this.Variable.Headers,
          token: _token,
        },
      }
    );
  }
  // 21 - Dat phong cho thue
  bookingRoomForRent(
    _idRoomForRent: string,
    _checkIn: string,
    _checkOut: string,
    _token: string
  ) {
    let params = {
      roomId: _idRoomForRent,
      checkIn: _checkIn,
      checkOut: _checkOut,
    };
    return this.https.post<any>(
      this.Variable.BaseUrl + 'api/rooms/booking',
      params,
      {
        headers: {
          ...this.Variable.Headers,
          token: _token,
        },
      }
    );
  }

  // 22 - Cap nhat hinh anh phong cho thue
  updateImgRoomForRent(_img: File, _token: string, _idRoomForRent: string) {
    const formData = new FormData();
    formData.append('room', _img);
    return this.https.post<any>(
      this.Variable.BaseUrl + 'api/rooms/upload-image/' + _idRoomForRent,
      formData,
      {
        headers: {
          ...this.Variable.Headers,
          token: _token,
        },
      }
    );
  }
}
