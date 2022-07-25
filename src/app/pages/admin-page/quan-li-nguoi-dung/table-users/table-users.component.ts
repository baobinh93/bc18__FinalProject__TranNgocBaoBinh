import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { UserService } from 'src/app/service/user/userService.service';

@Component({
  selector: 'app-table-users',
  styles: [
    `
      .search-box {
        padding: 8px;
      }

      .search-box input {
        width: 188px;
        margin-bottom: 8px;
        display: block;
      }

      .search-box button {
        width: 90px;
      }

      .search-button {
        margin-right: 8px;
      }
    `,
  ],
  //templateUrl: './table-users.component.html',
  //styleUrls: ['./table-users.component.css'],
  template: `
    <nz-table
      #nzTable
      [nzData]="listOfDisplayData"
      nzTableLayout="auto"
      [nzPageSize]="6"
    >
      <thead>
        <tr>
          <th nzCustomFilter>
            Name
            <nz-filter-trigger
              [(nzVisible)]="visible"
              [nzActive]="searchValue.length > 0"
              [nzDropdownMenu]="menu"
            >
              <i nz-icon nzType="search"></i>
            </nz-filter-trigger>
          </th>
          <th>Avatar</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of nzTable.data; let i = index">
          <td>{{ data['name'] }}</td>
          <td>
            <!-- <img src="{{ data.avatar }}" alt="" /> -->
            <nz-avatar
              nz-comment-avatar
              nzIcon="user"
              nzSrc="{{ data['avatar'] }}"
            ></nz-avatar>
          </td>
          <td>{{ data['email'] }}</td>
          <td>
            <button
              class="btn w-50 btn-info btn-sm mr-1"
              (click)="showUserToModal(data)"
            >
              Xem chi tiết
            </button>

            <button
              class="btn btn-success btn-sm mr-1"
              (click)="updateUser(data)"
            >
              Sửa
            </button>
            <button
              class="btn btn-danger btn-sm"
              nz-popconfirm
              nzPopconfirmTitle="Bạn có chắc muốn xoá?"
              nzPopconfirmPlacement="bottom"
              (nzOnConfirm)="confirmDeleteUser(data['_id'])"
            >
              Xoá
            </button>
          </td>
        </tr>
      </tbody>
    </nz-table>
    <nz-dropdown-menu #menu="nzDropdownMenu">
      <div class="ant-table-filter-dropdown">
        <div class="search-box">
          <input
            type="text"
            nz-input
            placeholder="Search name"
            [(ngModel)]="searchValue"
          />
          <button
            nz-button
            nzSize="small"
            nzType="primary"
            (click)="search()"
            class="search-button"
          >
            Search
          </button>
          <button nz-button nzSize="small" (click)="reset()">Reset</button>
        </div>
      </div>
    </nz-dropdown-menu>
    <nz-modal
      [(nzVisible)]="isInfoUserModalVisible"
      (nzOnCancel)="handleCancel()"
      [nzFooter]="modalFooter"
      (nzOnOk)="handleOk()"
    >
      <ng-container *nzModalContent>
        <div class="row">
          <div class="col-sm-6 col-md-4">
            <img
              src="{{ this.dataUserToShowInModal['avatar'] }}"
              alt=""
              class="img-rounded img-responsive w-100"
            />
          </div>
          <div class="col-sm-6 col-md-8">
            <h4>{{ this.dataUserToShowInModal['name'] }}</h4>
            <small
              ><cite title="San Francisco, USA"
                >{{ this.dataUserToShowInModal['address'] }}
                <i class="fa-solid fa-location-dot ml-1"></i></cite
            ></small>
            <p>
              <i class="fa-solid fa-envelope mr-1"></i>
              {{ this.dataUserToShowInModal['email'] }}
              <br />

              <i class="fa-solid fa-gift mr-1"></i>
              {{ this.dataUserToShowInModal['birthday'] | date }}
              <br />

              <i class="fa-solid fa-phone mr-1"></i>
              {{ this.dataUserToShowInModal['phone'] }}
            </p>
            <!-- Split button -->
          </div>
        </div>
      </ng-container>
      <ng-template #modalFooter>
        <button nz-button nzType="default" (click)="handleCancel()">
          Đóng
        </button>
      </ng-template>
    </nz-modal>
    <nz-modal
      [(nzVisible)]="isUpdateUserFormModalVisible"
      (nzOnCancel)="handleCancel()"
      (nzOnOk)="handleOk()"
    >
      <ng-container *nzModalContent>
        <app-update-user-form
          [dataUserToUpdate]="this.dataUserToUpdate"
        ></app-update-user-form>
      </ng-container>
    </nz-modal>
  `,
})
export class TableUsersComponent implements OnInit {
  // listOfDisplayData: any = [];
  isInfoUserModalVisible = false;
  isUpdateUserFormModalVisible = false;
  dataUser = [];
  dataUserToUpdate = {};
  dataUserToShowInModal: any = {};
  listOfDisplayData = [...this.dataUser];
  test = [];
  searchValue = '';
  visible = false;
  constructor(
    private userService: UserService,
    private nzMessageService: NzMessageService
  ) {}

  ngOnInit() {
    this.userService.getAllUsers(0, 10).subscribe(
      (res) => {
        this.dataUser = res;
        this.listOfDisplayData = [...this.dataUser];
        console.log('dataUser', this.dataUser);
      },
      (err) => console.log(err)
    );
  }

  reset(): void {
    this.searchValue = '';
    this.search();
  }
  refresh(): void {
    window.location.reload();
  }
  search() {
    this.visible = false;
    this.listOfDisplayData = this.dataUser.filter((item: any) => {
      if (typeof item.name === 'undefined') {
        return false;
      } else {
        let nameToLowerCase = item.name.toLowerCase();
        let searchValueToLowerCase = this.searchValue.toLowerCase();
        //return item.name.indexOf(this.searchValue) !== -1;
        return nameToLowerCase.indexOf(searchValueToLowerCase) !== -1;
      }
    });
  }

  showUserToModal(_user: {}) {
    this.isInfoUserModalVisible = true;
    this.dataUserToShowInModal = _user;
  }
  updateUser(_user: {}) {
    //console.log(_user);
    this.isUpdateUserFormModalVisible = true;
    this.dataUserToUpdate = _user;
  }
  deleteUser(_id: string) {
    console.log(_id);
  }
  handleOk(): void {
    console.log('Button ok clicked!');
    this.isInfoUserModalVisible = false;
    this.isUpdateUserFormModalVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isInfoUserModalVisible = false;
    this.isUpdateUserFormModalVisible = false;
  }
  cancelDeleteUser(): void {
    this.nzMessageService.info('click cancel');
  }

  confirmDeleteUser(_id: string): void {
    this.userService.deleteUser(_id).subscribe(
      (res) => {
        console.log(res);
        this.nzMessageService.info('Đã xoá user');
        setTimeout(this.refresh, 500);
      },
      (err) => this.nzMessageService.warning(err)
    );

    console.log('Xoa user co id', _id);
  }
}
