import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  dataUser: any = {};
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (localStorage.getItem('USERINFO')) {
      if (this.dataUser.type === 'ADMIN') {
        // alert('Đang chuyển tới trang quản lý');
        return true;
      }
      alert('Bạn không có quyền truy cập trang quản lý');
      this.router.navigate(['/']);
      return false;
    } else {
      alert('Bạn phải đăng nhập');
      this.router.navigate(['/sign-in']);
      return false;
    }
  }
  constructor(private router: Router) {
    const dataString = localStorage.getItem('USERINFO');
    this.dataUser = !dataString ? null : JSON.parse(dataString);
    console.log('dataUser', this.dataUser);
  }
}
