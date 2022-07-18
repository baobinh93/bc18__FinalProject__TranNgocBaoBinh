import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { AntdModule } from 'src/app/antd/antd.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, AntdModule, RouterModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {}
