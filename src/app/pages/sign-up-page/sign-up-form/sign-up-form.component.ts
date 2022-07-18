import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

@Component({
  selector: 'app-sign-up-form',
  template: `
    <form
      nz-form
      [formGroup]="validateForm"
      (ngSubmit)="submitForm()"
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
          <input formControlName="name" id="name" type="text" nz-input />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSm]="6" [nzXs]="24" nzRequired nzFor="email"
          >E-mail</nz-form-label
        >
        <nz-form-control
          [nzSm]="14"
          [nzXs]="24"
          nzErrorTip="The input is not valid E-mail!"
        >
          <input nz-input formControlName="email" id="email" />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSm]="6" [nzXs]="24" nzFor="password" nzRequired
          >Password</nz-form-label
        >
        <nz-form-control
          [nzSm]="14"
          [nzXs]="24"
          nzErrorTip="Please input your password!"
        >
          <input
            nz-input
            type="password"
            id="password"
            formControlName="password"
            (ngModelChange)="updateConfirmValidator()"
          />
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSm]="6" [nzXs]="24" nzFor="checkPassword" nzRequired
          >Confirm Password</nz-form-label
        >
        <nz-form-control [nzSm]="14" [nzXs]="24" [nzErrorTip]="errorTpl">
          <input
            nz-input
            type="password"
            formControlName="checkPassword"
            id="checkPassword"
          />
          <ng-template #errorTpl let-control>
            <ng-container *ngIf="control.hasError('required')"
              >Please confirm your password!</ng-container
            >
            <ng-container *ngIf="control.hasError('confirm')">
              Two passwords that you enter is inconsistent!
            </ng-container>
          </ng-template>
        </nz-form-control>
      </nz-form-item>

      <nz-form-item>
        <nz-form-label [nzSm]="6" [nzXs]="24" nzFor="phoneNumber" nzRequired
          >Phone
        </nz-form-label>
        <nz-form-control
          [nzSm]="14"
          [nzXs]="24"
          [nzValidateStatus]="validateForm.controls['phoneNumber']"
          [nzErrorTip]="errorTpl2"
        >
          <input formControlName="phone" id="'phoneNumber'" nz-input />

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
        <nz-form-label [nzSm]="6" [nzXs]="24" nzFor="birthday" nzRequired
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
          <input formControlName="address" id="address" type="text" nz-input />
        </nz-form-control>
      </nz-form-item>

      <nz-form-item>
        <nz-form-label [nzSm]="6" [nzXs]="24" nzFor="gender" nzRequired
          >Gender</nz-form-label
        >
        <nz-form-control [nzSm]="14" [nzXs]="24">
          <nz-radio-group formControlName="gender">
            <label nz-radio [nzValue]="true">Male</label>
            <label nz-radio [nzValue]="false">Female</label>
          </nz-radio-group>
        </nz-form-control>
      </nz-form-item>

      <nz-form-item nz-row class="register-area">
        <nz-form-control [nzSpan]="14" [nzOffset]="6">
          <label nz-checkbox formControlName="agree">
            <span>
              I have read the
              <a>agreement</a>
            </span>
          </label>
        </nz-form-control>
      </nz-form-item>

      <nz-form-item nz-row class="register-area">
        <nz-form-control [nzSpan]="14" [nzOffset]="6">
          <button
            nz-button
            nzType="primary"
            [disabled]="!this.validateForm.controls['agree'].value"
          >
            Register
          </button>
        </nz-form-control>
      </nz-form-item>
    </form>
  `,

  styles: [
    `
      [nz-form] {
        max-width: 600px;
      }

      .phone-select {
        width: 70px;
      }

      .register-are {
        margin-bottom: 8px;
      }
    `,
  ],
})
export class SignUpFormComponent implements OnInit {
  validateForm!: FormGroup;
  date = null;
  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      let { name, email, password, phone, birthday, gender, address } =
        this.validateForm.value;
      console.log('dataSend', {
        name,
        email,
        password,
        phone,
        birthday,
        gender,
        address,
      });
      //alert('Dang Ky Thanh Cong');
      this.authenticationService
        .signUp(name, email, password, phone, birthday, gender, address)
        .subscribe(
          (result) => {
            console.log('result', result);

            alert('Congratulations, your account has been successfull created');
            this.router.navigate(['/sign-in']);
          },
          (err) => {
            alert(err.error.message);
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

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() =>
      this.validateForm.controls['checkPassword'].updateValueAndValidity()
    );
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls['password'].value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}
  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],

      phone: [
        null,
        [Validators.required, Validators.pattern('^[0-9-+]{9,15}$')],
      ],
      birthday: [null, [Validators.required]],
      address: [null, [Validators.required]],
      gender: [true],
      agree: [false],
      name: [null, [Validators.required]],
    });
  }
}
