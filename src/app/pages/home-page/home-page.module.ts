import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { AntdModule } from '../../antd/antd.module';

import { PageLayoutComponent } from '../page-layout/page-layout.component';
import { ConvertNameToCodeNamePipe } from 'src/app/pipes/convertNameToCodeName.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

let router: Routes = [
  {
    path: '',
    component: PageLayoutComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
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
  ],
  declarations: [HomePageComponent, ConvertNameToCodeNamePipe],
})
export class HomePageModule {}
