import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './profile-page.component';
import { PageLayoutModule } from '../page-layout/page-layout.module';
import { AntdModule } from 'src/app/antd/antd.module';
import { RouterModule, Routes } from '@angular/router';
import { PageLayoutComponent } from '../page-layout/page-layout.component';
import { UpdateInfoFormComponent } from './update-info-form/update-info-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from 'src/app/auth.guard';
import { TicketCardComponent } from './ticket-card/ticket-card.component';
let router: Routes = [
  {
    path: '',
    component: PageLayoutComponent,

    children: [
      {
        path: '',
        component: ProfilePageComponent,
      },
    ],
  },
];
@NgModule({
  imports: [
    CommonModule,
    PageLayoutModule,
    RouterModule.forChild(router),
    FormsModule,
    AntdModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ProfilePageComponent,
    UpdateInfoFormComponent,
    TicketCardComponent,
  ],
})
export class ProfilePageModule {}
