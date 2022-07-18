import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInPageComponent } from './sign-in-page.component';
import { RouterModule, Routes } from '@angular/router';

import { AntdModule } from 'src/app/antd/antd.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'src/app/service/user/userService.service';
import { PageLayoutModule } from '../page-layout/page-layout.module';
import { PageLayoutComponent } from '../page-layout/page-layout.component';
import { DayPickerComponent } from '../sign-up-page/day-picker/day-picker.component';

let router: Routes = [
  {
    path: '',
    component: PageLayoutComponent,
    children: [
      {
        path: '',
        component: SignInPageComponent,
      },
    ],
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(router),

    AntdModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  declarations: [SignInPageComponent],

  providers: [],
})
export class SignInPageModule {}
