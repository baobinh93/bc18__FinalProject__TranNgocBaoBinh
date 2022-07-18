import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { AuthenticationService } from 'src/app/service/authentication/authentication.service';
import { Validate } from 'src/app/validate';
import { localStorageService } from 'src/app/localStorage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in-page',
  //  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css'],
  template: `
    <div class="container sign-in-content">
      <div class="row rounded  mx-lg-5">
        <div class="d-md-block d-none col-md-6 form__img">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 744.848 747.077"
          >
            <path
              data-name="Path 1"
              d="M71.629 629.347l-6.56-25.872a335.967 335.967 0 00-35.643-12.788l-.828 12.024-3.358-13.247C10.219 585.17 0 583.281 0 583.281s13.8 52.489 42.754 92.617l33.734 5.926-26.207 3.779A135.926 135.926 0 0062 698.025c42.115 39.092 89.024 57.028 104.773 40.06s-5.625-62.412-47.74-101.5c-13.056-12.119-29.457-21.844-45.875-29.5z"
              fill="#f2f2f2"
            ></path>
            <path
              data-name="Path 2"
              d="M134.015 601.245l7.758-25.538a335.94 335.94 0 00-23.9-29.371l-6.924 9.865 3.972-13.076c-10.641-11.436-18.412-18.335-18.412-18.335s-15.315 52.067-11.275 101.384l25.815 22.51-24.392-10.312a135.919 135.919 0 003.614 16.694c15.846 55.234 46.731 94.835 68.983 88.451s27.446-56.335 11.6-111.569c-4.912-17.123-13.926-33.926-24.023-48.965z"
              fill="#f2f2f2"
            ></path>
            <path
              data-name="Path 22"
              d="M519.751 176.983h-4.092v-112.1A64.883 64.883 0 00450.776 0H213.269a64.883 64.883 0 00-64.883 64.883v615a64.883 64.883 0 0064.883 64.883h237.507a64.883 64.883 0 0064.882-64.883V256.778h4.092z"
              fill="#e6e6e6"
            ></path>
            <path
              data-name="Path 23"
              d="M453.394 16.874h-31a23.02 23.02 0 01-21.316 31.714H265.013a23.02 23.02 0 01-21.314-31.714h-28.956a48.454 48.454 0 00-48.454 48.454v614.107a48.454 48.454 0 0048.454 48.454h238.651a48.454 48.454 0 0048.454-48.454V65.327a48.454 48.454 0 00-48.454-48.453z"
              fill="#fff"
            ></path>
            <path
              data-name="Path 6"
              d="M303.658 261.503a24.437 24.437 0 0112.23-21.174 24.45 24.45 0 100 42.345 24.434 24.434 0 01-12.23-21.171z"
              fill="#ccc"
            ></path>
            <path
              data-name="Path 7"
              d="M334.395 261.503a24.436 24.436 0 0112.23-21.174 24.45 24.45 0 100 42.345 24.434 24.434 0 01-12.23-21.171z"
              fill="#ccc"
            ></path>
            <circle
              data-name="Ellipse 1"
              cx="364.434"
              cy="261.502"
              r="24.45"
              fill="#ff385c"
            ></circle>
            <path
              data-name="Path 8"
              d="M405.296 337.869h-142.5a5.123 5.123 0 01-5.117-5.117v-142.5a5.123 5.123 0 015.117-5.117h142.5a5.123 5.123 0 015.117 5.117v142.5a5.123 5.123 0 01-5.117 5.117zm-142.5-150.686a3.073 3.073 0 00-3.07 3.07v142.5a3.073 3.073 0 003.07 3.07h142.5a3.073 3.073 0 003.07-3.07v-142.5a3.073 3.073 0 00-3.07-3.07z"
              fill="#ccc"
            ></path>
            <path
              data-name="Rectangle 1"
              fill="#ccc"
              d="M218.562 447.102h218.552v2.047H218.562z"
            ></path>
            <circle
              data-name="Ellipse 2"
              cx="225.464"
              cy="427.42"
              r="6.902"
              fill="#ff385c"
            ></circle>
            <path
              data-name="Rectangle 2"
              fill="#ccc"
              d="M218.562 516.118h218.552v2.047H218.562z"
            ></path>
            <circle
              data-name="Ellipse 3"
              cx="225.464"
              cy="496.437"
              r="6.902"
              fill="#ff385c"
            ></circle>
            <path
              d="M433.114 594.71h-69.068a4.505 4.505 0 01-4.5-4.5v-24.208a4.505 4.505 0 014.5-4.5h69.068a4.505 4.505 0 014.5 4.5v24.208a4.505 4.505 0 01-4.5 4.5z"
              fill="#ff385c"
            ></path>
            <circle
              data-name="Ellipse 7"
              cx="247.978"
              cy="427.42"
              r="6.902"
              fill="#ff385c"
            ></circle>
            <circle
              data-name="Ellipse 8"
              cx="270.492"
              cy="427.42"
              r="6.902"
              fill="#ff385c"
            ></circle>
            <circle
              data-name="Ellipse 9"
              cx="247.978"
              cy="496.437"
              r="6.902"
              fill="#ff385c"
            ></circle>
            <circle
              data-name="Ellipse 10"
              cx="270.492"
              cy="496.437"
              r="6.902"
              fill="#ff385c"
            ></circle>
            <path
              data-name="Path 88"
              d="M742.066 747.077H24.08c-1.537 0-2.782-.546-2.782-1.218s1.245-1.219 2.782-1.219h717.986c1.536 0 2.782.546 2.782 1.219s-1.246 1.218-2.782 1.218z"
              fill="#3f3d56"
            ></path>
            <path
              d="M564.677 489.461a10.094 10.094 0 011.41.788l44.853-19.143 1.6-11.816 17.922-.11-1.059 27.099-59.2 15.656a10.608 10.608 0 01-.447 1.208 10.235 10.235 0 11-5.08-13.682zM636.98 735.021h-12.26l-5.832-47.288 18.094.001-.002 47.287z"
              fill="#ffb8b8"
            ></path>
            <path
              d="M615.963 731.518h23.644v14.887h-38.531a14.887 14.887 0 0114.887-14.887z"
              fill="#2f2e41"
            ></path>
            <path
              fill="#ffb8b8"
              d="M684.66 731.557l-12.201 1.202-10.441-46.488 18.007-1.774 4.635 47.06z"
            ></path>
            <path
              d="M663.401 730.131l23.53-2.318 1.46 14.816-38.346 3.776a14.887 14.887 0 0113.356-16.274z"
              fill="#2f2e41"
            ></path>
            <circle
              cx="640.393"
              cy="384.574"
              r="24.561"
              fill="#ffb8b8"
            ></circle>
            <path
              d="M621.98 725.458a4.47 4.47 0 01-4.415-3.697c-6.345-35.226-27.088-150.406-27.584-153.596a1.427 1.427 0 01-.015-.222v-8.588a1.489 1.489 0 01.279-.872l2.74-3.838a1.478 1.478 0 011.144-.625c15.622-.732 66.784-2.878 69.256.21 2.482 3.103 1.605 12.506 1.404 14.36l.01.193 22.985 146.995a4.512 4.512 0 01-3.715 5.135l-14.356 2.365a4.521 4.521 0 01-5.026-3.092c-4.44-14.189-19.329-61.918-24.489-80.387a.5.5 0 00-.98.138c.258 17.606.88 62.524 1.095 78.038l.024 1.67a4.518 4.518 0 01-4.093 4.537l-13.844 1.257c-.14.013-.281.019-.42.019z"
              fill="#2f2e41"
            ></path>
            <path
              data-name="Path 99"
              d="M624.805 418.792c-4.286 2.548-6.851 7.23-8.323 11.995a113.681 113.681 0 00-4.884 27.16l-1.556 27.6-19.255 73.17c16.689 14.12 26.315 10.911 48.78-.639s25.033 3.851 25.033 3.851l4.492-62.258 6.419-68.032a30.164 30.164 0 00-4.862-4.675 49.658 49.658 0 00-42.442-8.995z"
              fill="#fff"
            ></path>
            <path
              d="M618.55 504.239a10.526 10.526 0 011.501.704l44.349-22.197.736-12.026 18.293-1.261.98 27.412-59.265 19.6a10.496 10.496 0 11-6.593-12.232z"
              fill="#ffb8b8"
            ></path>
            <path
              data-name="Path 101"
              d="M675.19 431.95c10.911 3.851 12.833 45.574 12.833 45.574-12.837-7.06-28.241 4.493-28.241 4.493s-3.21-10.912-7.06-25.032a24.53 24.53 0 015.134-23.107s6.422-5.781 17.334-1.928z"
              fill="#fff"
            ></path>
            <path
              data-name="Path 102"
              d="M662.415 391.069c-3.06-2.448-7.235 2.002-7.235 2.002l-2.448-22.034s-15.301 1.833-25.094-.611-11.322 8.875-11.322 8.875a78.58 78.58 0 01-.306-13.771c.611-5.509 8.568-11.017 22.645-14.69s21.42 12.242 21.42 12.242c9.794 4.895 5.4 30.435 2.34 27.987z"
              fill="#2f2e41"
            ></path>
          </svg>
        </div>
        <div
          class=" col-12 col-md-6 bg-white d-flex align-items-center justify-content-center form__input"
        >
          <form
            #signInForm="ngForm"
            (ngSubmit)="handleSignInSubmit()"
            class="w-100"
          >
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  <i class="fa-regular fa-envelope"></i>
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="Your Email"
                name="email"
                ngModel
                #emailInputRef="ngModel"
                required
              />
            </div>
            <div
              class="p-0 text-danger"
              *ngIf="   emailInputRef.errors?.['required'] && emailInputRef.touched "
            >
              Vui long nhap Email
            </div>
            <div
              class="p-0 text-danger "
              *ngIf="
                (!validate.email(emailInputRef.value)) &&
                emailInputRef.touched && !emailInputRef.errors?.['required']
              "
            >
              Email khong hop le
            </div>
            <div class="input-group mt-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon2">
                  <i class="fa-solid fa-lock"></i>
                </span>
              </div>
              <input
                type="text"
                class="form-control "
                name="password"
                placeholder="Your PassWord"
                ngModel
                #passwordInputRef="ngModel"
                required
              />
            </div>
            <div
              class="p-0 text-danger"
              *ngIf="passwordInputRef.errors?.['required'] && passwordInputRef.touched "
            >
              Vui long nhap Password
            </div>
            <div
              class="p-0 text-danger "
              *ngIf="
                (!validate.password(passwordInputRef.value)) &&
                passwordInputRef.touched && !passwordInputRef.errors?.['required']
              "
            >
              Minimum eight characters, at least one uppercase letter, one
              lowercase letter and one number
            </div>
            <div class="mt-3">
              <button
                [disabled]="passwordInputRef.errors?.['required'] ||  emailInputRef.errors?.['required'] || !validate.password(passwordInputRef.value) || !validate.email(emailInputRef.value)"
                [ngClass]="passwordInputRef.errors?.['required'] ||  emailInputRef.errors?.['required'] || !validate.password(passwordInputRef.value) || !validate.email(emailInputRef.value)? 'bg-secondary text-white' : 'bg-danger text-warning'"
              >
                SIGNIN NOW
              </button>
            </div>

            <a href="/sign-up" class=""> Ban chua co tai khoan </a>
          </form>
        </div>
      </div>
    </div>
  `,
})
export class SignInPageComponent implements OnInit {
  handleSignInSubmit() {
    const { email, password } = this.signInForm.value;

    this.authenticationService.signIn(email, password).subscribe(
      (result) => {
        console.log('result', result);
        console.log('token', result.token);
        this.localStorageService.setUserInfo({
          token: result.token,
          ...result.user,
        });
        alert(result.message);
        this.router.navigate(['/']);
      },
      (err) => {
        alert(err.error.message);
      }
    );
  }
  @ViewChild('signInForm') signInForm!: NgForm;
  validate: Validate;
  localStorageService;
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.validate = new Validate();
    this.localStorageService = new localStorageService();
  }

  ngOnInit() {}
}
