import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';
import { localStorageService } from 'src/app/localStorage.service';
import { UserService } from 'src/app/service/user/userService.service';
@Component({
  selector: 'app-update-info-form',
  template: `
    <!-- Button trigger modal -->
    <button
      data-toggle="modal"
      data-target="#update-user-info"
      class="font-weight-bold  user__avatar--button border-0 bg-gradient-light cursor-pointer mt-3"
    >
      <u>Chỉnh sửa hồ sơ</u>
    </button>
    <!-- Modal -->
    <div
      class="modal fade"
      id="update-user-info"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      #modalUserInfo
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Update Info</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form
              nz-form
              [formGroup]="validateForm"
              (ngSubmit)="submitForm()"
              v
              class="py-5 "
            >
              <nz-form-item class="position-relative">
                <nz-form-label [nzSm]="6" [nzXs]="24" nzFor="name" nzRequired
                  >Name</nz-form-label
                >
                <nz-form-control
                  [nzSm]="14"
                  [nzXs]="24"
                  nzErrorTip="Please input your name!"
                >
                  <input
                    formControlName="name"
                    id="name"
                    type="text"
                    nz-input
                    (ngModelChange)="changeOpenUpdateBtn()"
                  />
                </nz-form-control>
              </nz-form-item>

              <nz-form-item>
                <nz-form-label
                  [nzSm]="6"
                  [nzXs]="24"
                  nzFor="phoneNumber"
                  nzRequired
                  >Phone
                </nz-form-label>
                <nz-form-control
                  [nzSm]="14"
                  [nzXs]="24"
                  [nzValidateStatus]="validateForm.controls['phoneNumber']"
                  [nzErrorTip]="errorTpl2"
                >
                  <input
                    formControlName="phone"
                    id="'phoneNumber'"
                    nz-input
                    (ngModelChange)="changeOpenUpdateBtn()"
                  />

                  <ng-template #errorTpl2 let-control>
                    <ng-container *ngIf="control.hasError('required')"
                      >Please input your phone number!</ng-container
                    >
                    <ng-container *ngIf="control.hasError('pattern')">
                      Phone number is invalid!
                    </ng-container>
                  </ng-template>
                </nz-form-control>
              </nz-form-item>

              <nz-form-item class="position-relative">
                <nz-form-label
                  [nzSm]="6"
                  [nzXs]="24"
                  nzFor="birthday"
                  nzRequired
                  >Birthday</nz-form-label
                >
                <nz-form-control
                  [nzSm]="14"
                  [nzXs]="24"
                  nzErrorTip="Please input your birthday!"
                >
                  <input
                    formControlName="birthday"
                    id="birthday"
                    type="date"
                    nz-input
                    (ngModelChange)="changeOpenUpdateBtn()"
                  />
                </nz-form-control>
              </nz-form-item>

              <nz-form-item class="position-relative">
                <nz-form-label [nzSm]="6" [nzXs]="24" nzFor="address" nzRequired
                  >Address</nz-form-label
                >
                <nz-form-control
                  [nzSm]="14"
                  [nzXs]="24"
                  nzErrorTip="Please input your address!"
                >
                  <input
                    formControlName="address"
                    id="address"
                    type="text"
                    nz-input
                    (ngModelChange)="changeOpenUpdateBtn()"
                  />
                </nz-form-control>
              </nz-form-item>

              <nz-form-item>
                <nz-form-label [nzSm]="6" [nzXs]="24" nzFor="gender" nzRequired
                  >Gender</nz-form-label
                >
                <nz-form-control [nzSm]="14" [nzXs]="24">
                  <nz-radio-group
                    formControlName="gender"
                    (ngModelChange)="changeOpenUpdateBtn()"
                  >
                    <label nz-radio [nzValue]="true">Male</label>
                    <label nz-radio [nzValue]="false">Female</label>
                  </nz-radio-group>
                </nz-form-control>
              </nz-form-item>

              <nz-form-item nz-row class="register-area">
                <nz-form-control [nzSpan]="14" [nzOffset]="10">
                  <button
                    [disabled]="this.openUpdateBtn"
                    nz-button
                    nzType="primary"
                  >
                    Update
                  </button>
                </nz-form-control>
              </nz-form-item>
            </form>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class UpdateInfoFormComponent {
  @Input() userInfo: any = {};

  openUpdateBtn = true;
  changeOpenUpdateBtn() {
    return (this.openUpdateBtn = false);
  }

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private message: NzMessageService,
    private rerender: Renderer2
  ) {
    this.localStorageService = new localStorageService();
  }
  localStorageService;
  isVisible = false;
  validateForm!: FormGroup;

  ngOnInit(): void {
    //console.log('update form:', this.userInfo._id);
    // console.log('2022-06-09T00:00:00.000Z'.split('T')[0]);

    this.validateForm = this.fb.group({
      phone: [
        this.userInfo.phone,
        [Validators.required, Validators.pattern('^[0-9-+]{9,15}$')],
      ],

      birthday: [this.userInfo.birthday.split('T')[0], [Validators.required]],
      address: [this.userInfo.address, [Validators.required]],
      gender: [this.userInfo.gender],
      type: ['CLIENT'],
      name: [this.userInfo.name, [Validators.required]],
      email: [this.userInfo.email],
    });
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    //this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    // this.isVisible = false;
  }
  submitForm(): void {
    console.log('Button submit clicked!');
    this.isVisible = false;
    if (this.validateForm.valid) {
      let { name, email, phone, birthday, gender, address, type } =
        this.validateForm.value;
      console.log('dataSend', {
        name,
        email,

        phone,
        birthday,
        gender,
        address,
        type,
      });

      this.userService
        .updateUserInfo(
          this.userInfo._id,
          name,
          this.userInfo.email,
          phone,
          birthday,
          gender,
          type,
          address,
          this.userInfo.token
        )
        .subscribe(
          (result) => {
            console.log('result', result);
            //console.log('token', this.userInfo.token);
            this.localStorageService.setUserInfo({
              token: this.userInfo.token,
              ...result,
            });
            this.userInfo = this.localStorageService.getUserInfo();
            // this.message.success('Cập nhật thành công');

            setTimeout(() => this.refresh(), 1000);
          },
          (err) => {
            this.message.error('Cập nhật thất bại');
          }
        );
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
  refresh(): void {
    window.location.reload();
  }
}
