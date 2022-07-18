import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsPageComponent } from './rooms-page.component';
import { RouterModule, Routes } from '@angular/router';
import { PageLayoutComponent } from '../page-layout/page-layout.component';
import { AntdModule } from 'src/app/antd/antd.module';
import { ConvertNameToCodeNamePipe } from 'src/app/pipes/convertNameToCodeName.pipe';
import { MaterialModule } from 'src/app/material/material.module';

let router: Routes = [
  {
    path: '',
    component: PageLayoutComponent,

    children: [
      {
        path: 'rooms/:locationCodeName',
        component: RoomsPageComponent,
      },
    ],
  },
];
@NgModule({
  imports: [
    CommonModule,
    AntdModule,
    RouterModule.forChild(router),
    RouterModule,
    MaterialModule,
  ],
  declarations: [RoomsPageComponent],
})
export class RoomsPageModule {}
