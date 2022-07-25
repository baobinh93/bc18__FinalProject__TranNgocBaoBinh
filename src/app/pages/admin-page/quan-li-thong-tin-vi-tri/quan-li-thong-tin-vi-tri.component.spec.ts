/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QuanLiThongTinViTriComponent } from './quan-li-thong-tin-vi-tri.component';

describe('QuanLiThongTinViTriComponent', () => {
  let component: QuanLiThongTinViTriComponent;
  let fixture: ComponentFixture<QuanLiThongTinViTriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanLiThongTinViTriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLiThongTinViTriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
