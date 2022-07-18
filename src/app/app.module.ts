import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { MatSliderModule } from '@angular/material/slider';
registerLocaleData(en);
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { ConvertNameToCodeNamePipe } from './pipes/convertNameToCodeName.pipe';
import { AuthGuard } from './auth.guard';
import { AntdModule } from './antd/antd.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
let router: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'sign-in',
    loadChildren: () => {
      return import('./pages/sign-in-page/sign-in-page.module').then(
        (m) => m.SignInPageModule
      );
    },
  },
  {
    path: 'sign-up',
    loadChildren: () => {
      return import('./pages/sign-up-page/sign-up-page.module').then(
        (m) => m.SignUpPageModule
      );
    },
  },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    loadChildren: () => {
      return import('./pages/profile-page/profile-page.module').then(
        (m) => m.ProfilePageModule
      );
    },
  },
  {
    path: '',
    loadChildren: () => {
      return import('./pages/rooms-page/rooms-page.module').then(
        (m) => m.RoomsPageModule
      );
    },
  },
  {
    path: '',
    loadChildren: () => {
      return import('./pages/detail-page/detail-page.module').then(
        (m) => m.DetailPageModule
      );
    },
  },
];
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(router, { scrollPositionRestoration: 'top' }),
    HttpClientModule,
    AntdModule,
    BrowserAnimationsModule,
    MatSliderModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
