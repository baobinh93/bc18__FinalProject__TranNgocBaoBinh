import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailPageComponent } from './detail-page.component';
import { PageLayoutComponent } from '../page-layout/page-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { AntdModule } from 'src/app/antd/antd.module';
import { MaterialModule } from 'src/app/material/material.module';
import {
  DefaultMatCalendarRangeStrategy,
  MatDatepickerModule,
  MAT_DATE_RANGE_SELECTION_STRATEGY,
} from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { MatInputModule } from '@angular/material/input';
import { localStorageService } from 'src/app/localStorage.service';
import { UserCommentComponent } from './user-comment/user-comment.component';
let router: Routes = [
  {
    path: '',
    component: PageLayoutComponent,

    children: [
      {
        path: 'detail/:idRoom',
        component: DetailPageComponent,
      },
    ],
  },
];
@NgModule({
  imports: [
    CommonModule,
    AntdModule,
    RouterModule,
    RouterModule.forChild(router),
    AntdModule,
    MaterialModule,
    FormsModule,

    ReactiveFormsModule,

    MatInputModule,
    MatDatepickerModule,
  ],
  declarations: [
    DetailPageComponent,
    BookingFormComponent,
    UserCommentComponent,
  ],
  providers: [
    {
      provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
      useClass: DefaultMatCalendarRangeStrategy,
    },
    localStorageService,
  ],
})
export class DetailPageModule {}
