import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page.component';
import { AntdModule } from 'src/app/antd/antd.module';
import { MaterialModule } from 'src/app/material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageLayoutComponent } from '../page-layout/page-layout.component';
import { QuanLiNguoiDungComponent } from './quan-li-nguoi-dung/quan-li-nguoi-dung.component';
import { QuanLiThongTinPhongComponent } from './quan-li-thong-tin-phong/quan-li-thong-tin-phong.component';
import { QuanLiThongTinViTriComponent } from './quan-li-thong-tin-vi-tri/quan-li-thong-tin-vi-tri.component';
import { TableUsersComponent } from './quan-li-nguoi-dung/table-users/table-users.component';
import { UpdateUserFormComponent } from './quan-li-nguoi-dung/table-users/update-user-form/update-user-form.component';
import { TableLocationsComponent } from './quan-li-thong-tin-vi-tri/table-locations/table-locations.component';
let router: Routes = [
  {
    path: 'admin',
    component: PageLayoutComponent,

    children: [
      {
        path: '',
        component: AdminPageComponent,
        children: [
          { path: '', redirectTo: 'quanlinguoidung', pathMatch: 'full' },
          { path: 'quanlinguoidung', component: QuanLiNguoiDungComponent },
          { path: 'quanliphong', component: QuanLiThongTinPhongComponent },
          { path: 'quanlivitri', component: QuanLiThongTinViTriComponent },
        ],
      },
    ],
  },
];
@NgModule({
  imports: [
    CommonModule,
    AntdModule,
    MaterialModule,
    RouterModule,
    RouterModule.forChild(router),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AdminPageComponent,
    TableUsersComponent,
    QuanLiNguoiDungComponent,
    QuanLiThongTinPhongComponent,
    QuanLiThongTinViTriComponent,
    UpdateUserFormComponent,
    TableLocationsComponent,
  ],
  //exports: [TableUsersComponent],
})
export class AdminPageModule {}
