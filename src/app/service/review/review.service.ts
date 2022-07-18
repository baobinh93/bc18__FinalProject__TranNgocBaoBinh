import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Variable } from '../variable';
@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  Variable: Variable;
  constructor(private https: HttpClient) {
    this.Variable = new Variable();
  }

  // 23 - tao mot danh gia
  createNewReview(_roomId: string, _content: string, _token: string) {
    let params = { content: _content };
    return this.https.post<any>(
      this.Variable.BaseUrl + 'api/reviews?roomId=' + _roomId,
      params,
      {
        headers: {
          ...this.Variable.Headers,
          token: _token,
        },
      }
    );
  }

  // 24 - Lay Danh Sach Danh Gia Theo Phong
  getListReviewByRoom(_roomId: string) {
    return this.https.get<any>(
      this.Variable.BaseUrl + 'api/reviews/byRoom?roomId=' + _roomId,
      {
        headers: {
          ...this.Variable.Headers,
        },
      }
    );
  }

  // 25 - Xoa danh gia theo Id Cua Danh Gia
  deleteReviewByRoom(_idReview: string, _token: string) {
    return this.https.delete<any>(
      this.Variable.BaseUrl + 'api/reviews/' + _idReview,
      {
        headers: {
          ...this.Variable.Headers,
          token: _token,
        },
      }
    );
  }
  // 26 - Lay thong tin chi tiet danh gia
  getContentReview(_idReview: string) {
    return this.https.get<any>(
      this.Variable.BaseUrl + 'api/reviews/' + _idReview,
      {
        headers: {
          ...this.Variable.Headers,
        },
      }
    );
  }
  // 27 - Cap nhat thong tin Danh Gia
  updateReview(_idReview: string, _content: string, _token: string) {
    let params = { content: _content };
    this.Variable.BaseUrl + 'api/reviews/' + _idReview,
      params,
      {
        headers: {
          ...this.Variable.Headers,
          token: _token,
        },
      };
  }
}
