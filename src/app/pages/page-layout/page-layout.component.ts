import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-layout',
  //templateUrl: './page-layout.component.html',
  //styleUrls: ['./page-layout.component.css'],
  template: `
    <app-header></app-header>
    <nz-back-top [nzTemplate]="tpl" [nzVisibilityHeight]="100">
      <ng-template #tpl>
        <div class="ant-back-top-inner">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 448 512"
            class="sc-16plokl-1 gpTfSR"
            height="20px"
            width="20px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
            ></path>
          </svg>
        </div>
      </ng-template>
    </nz-back-top>

    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  styles: [
    `
      :host ::ng-deep .ant-back-top {
        bottom: 15px;
        right: 10px;
      }

      :host ::ng-deep .ant-back-top-inner {
        height: 40px;
        width: 40px;
        line-height: 40px;
        border-radius: 5px;
        background-color: #ff385c;
        color: #fff;
        text-align: center;
        font-size: 20px;
      }

      :host ::ng-deep strong {
        color: #1088e9;
      }
    `,
  ],
})
export class PageLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
