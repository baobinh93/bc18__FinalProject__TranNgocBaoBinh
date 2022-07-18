import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Variable } from '../variable';
@Injectable({
  providedIn: 'root',
})
export class TicketService {
  Variable: Variable;
  constructor(private https: HttpClient) {
    this.Variable = new Variable();
  }
  // 28 - Lay Danh Sach Ve
  getListTickets() {
    return this.https.get<any>(this.Variable.BaseUrl + 'api/tickets', {
      headers: {
        ...this.Variable.Headers,
      },
    });
  }

  // 29 - Lay thong tin chi tiet ve
  getInfoTicket(_idTicket: string) {
    return this.https.get<any>(
      this.Variable.BaseUrl + 'api/tickets/' + _idTicket,
      {
        headers: {
          ...this.Variable.Headers,
        },
      }
    );
  }
  // 30 - cap nhat thong tin ve
  updateInfoTicket(
    _idTicket: string,
    _checkIn: string,
    _checkOut: string,
    _userId: string,
    _roomId: string,
    _token: string
  ) {
    let params = {
      checkIn: _checkIn,
      checkOut: _checkOut,
      userId: _userId,
      roomId: _roomId,
    };
    return this.https.put<any>(
      this.Variable.BaseUrl + 'api/tickets/' + _idTicket,
      params,

      {
        headers: {
          ...this.Variable.Headers,
          token: _token,
        },
      }
    );
  }
  // 31 - xoa ve
  deleteTickets(_idTicket: string, _token: string) {
    return this.https.delete<any>(
      this.Variable.BaseUrl + 'api/tickets/' + _idTicket,

      {
        headers: {
          ...this.Variable.Headers,
          token: _token,
        },
      }
    );
  }

  // 32 - tao ve
  createNewTicket(
    _checkIn: string,
    _checkOut: string,
    _userId: string,
    _roomId: string,
    _token: string
  ) {
    let params = {
      checkIn: _checkIn,
      checkOut: _checkOut,
      userId: _userId,
      roomId: _roomId,
    };
    return this.https.post<any>(
      this.Variable.BaseUrl + 'api/tickets',
      params,

      {
        headers: {
          ...this.Variable.Headers,
          token: _token,
        },
      }
    );
  }
  // 33 - Lay DS ve theo USerId
  getListTicketsByUserId(_idUser: string) {
    return this.https.post<any>(
      this.Variable.BaseUrl + 'api/tickets/by-user?userId=' + _idUser,

      {
        headers: {
          ...this.Variable.Headers,
        },
      }
    );
  }
  // 34 - Lay DS ve theo RoomId
  getListTicketsByRoomId(_idRoom: string) {
    return this.https.post<any>(
      this.Variable.BaseUrl + 'api/tickets/by-room?roomId=' + _idRoom,

      {
        headers: {
          ...this.Variable.Headers,
        },
      }
    );
  }
}
