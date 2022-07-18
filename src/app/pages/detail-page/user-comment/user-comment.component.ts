// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-user-comment',
//   templateUrl: './user-comment.component.html',
//   styleUrls: ['./user-comment.component.css']
// })
// export class UserCommentComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

import { formatDistance } from 'date-fns';

@Component({
  selector: 'app-user-comment',
  template: `
    <nz-comment
      nzAuthor="{{ this.dataUserComment.userId.name }}"
      [nzDatetime]="time"
    >
      <nz-avatar
        nz-comment-avatar
        nzIcon="user"
        nzSrc="{{ this.dataUserComment.userId.avatar }}"
      ></nz-avatar>
      <nz-comment-content>
        <p>
          {{ this.dataUserComment.content }}
        </p>
      </nz-comment-content>
    </nz-comment>
  `,
  styles: [
    `
      .count {
        padding-left: 8px;
        cursor: auto;
      }
      .ant-comment-rtl .count {
        padding-right: 8px;
        padding-left: 0;
      }
    `,
  ],
})
export class UserCommentComponent {
  @Input() dataUserComment: any = {};
  likes = 0;
  dislikes = 0;
  time = '';

  like(): void {
    this.likes = 1;
    this.dislikes = 0;
  }

  dislike(): void {
    this.likes = 0;
    this.dislikes = 1;
  }
  ngOnInit() {
    //  console.log('time', Date.parse(this.dataUserComment.created_at));
    let date = new Date(this.dataUserComment.created_at);
    this.time =
      date.getDate() + `/` + date.getMonth() + '/' + date.getFullYear();
  }
}
