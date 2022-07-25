import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  //templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],
  template: `
    <!-- <div class="container ">
      <div class="row">
        <div class="col-12 col-md-3 border">
          <nav class="navbar navbar-expand-md navbar-light ">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul class="navbar-nav   mt-2 mt-lg-0 flex-column">
                <li class="nav-item active">
                  <a class="nav-link" href="/admin/quanlynguoidung">
                    Quản lí người dùng
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/admin/quanlivitri"
                    >Quản lý vị trí</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/admin/quanlythongtinphong"
                    >Quản lí phòng cho thuê</a
                  >
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div class="col-12 col-md-9">Bang Quan Ly</div>
      </div>
    </div> -->
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-3 adminpage__navbar border-right bg-light">
          <div class="list-group flex-md-column flex-row ">
            <a
              class="list-group-item list-group-item-action "
              [ngClass]="{ active: isActive === 'quanlinguoidung' }"
              href="/admin/quanlinguoidung"
              (click)="changeActive('quanlinguoidung')"
            >
              Quản lý nguời dùng</a
            >

            <a
              class="list-group-item list-group-item-action"
              [ngClass]="{ active: isActive === 'quanlivitri' }"
              href="/admin/quanlivitri"
              (click)="changeActive('quanlivitri')"
            >
              Quản lý thông tin vị trí
            </a>

            <a
              class="list-group-item list-group-item-action "
              [ngClass]="{ active: isActive === 'quanliphong' }"
              href="/admin/quanliphong"
              (click)="changeActive('quanliphong')"
            >
              Quản lý thông tin phòng</a
            >
          </div>
        </div>
        <div class="col-md-9 col-12 adminpage__content">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
})
export class AdminPageComponent implements OnInit {
  // tabs = ['Quản lý người dùng', 'Quản lý vị trí', 'Quản lí phòng'];
  // redirect(_str: string) {
  //   let url;
  //   if (_str === 'Quản lý người dùng') {
  //     url = 'quanlinguoidung';
  //   }
  //   if (_str === 'Quản lý vị trí') {
  //     url = 'quanlivitri';
  //   }
  //   if (_str === 'Quản lí phòng') {
  //     url = 'quanliphong';
  //   }
  //   this.route.navigate(['/admin/' + url]);
  //   console.log(url);
  // }
  isActive: string = this.router.url.slice(7);
  changeActive(_str: string) {
    this.isActive = _str;
  }
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    console.log('get', this.router.url.slice(7));
  }
}
