import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProvincesService {
  constructor(private https: HttpClient) {}
  getAllVNProvinces() {
    return this.https.get<any>('https://provinces.open-api.vn/api/p/');
    // .pipe(
    //   map((result) => {
    //     return result.map((item: any) => {
    //       return item.name;
    //     });

    //   })
    // );
  }
}
