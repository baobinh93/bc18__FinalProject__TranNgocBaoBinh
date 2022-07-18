import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpPageComponent } from './sign-up-page.component';
import { RouterModule, Routes } from '@angular/router';
import { PageLayoutModule } from '../page-layout/page-layout.module';
import { PageLayoutComponent } from '../page-layout/page-layout.component';
import { AntdModule } from 'src/app/antd/antd.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { DayPickerComponent } from './day-picker/day-picker.component';
let router: Routes = [
  {
    path: '',
    component: PageLayoutComponent,
    children: [
      {
        path: '',
        component: SignUpPageComponent,
      },
    ],
  },
];
@NgModule({
  imports: [
    CommonModule,
    PageLayoutModule,
    RouterModule.forChild(router),
    AntdModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [SignUpPageComponent, SignUpFormComponent, DayPickerComponent],
})
export class SignUpPageModule {}
