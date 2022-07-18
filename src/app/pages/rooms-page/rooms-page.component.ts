import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LocationService } from 'src/app/service/location/location.service';
import { RoomForRentService } from 'src/app/service/room-for-rent/roomForRent.service';

@Component({
  selector: 'app-rooms-page',
  //templateUrl: './rooms-page.component.html',
  styleUrls: ['./rooms-page.component.css'],
  template: `
    <!-- <h1 *ngFor="let item of this.dataAllRooms">
      {{ item['name'] }}
    </h1> -->
    <div
      class="w-100 d-flex  justify-content-center"
      style="margin-top: 60px ; margin-bottom: 60px"
      *ngIf="isLoading"
    >
      <mat-spinner class="my-6 " mode="indeterminate"></mat-spinner>
    </div>

    <div class="map w-100" *ngIf="this.dataAllRooms.length !== 0">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d501726.4614470814!2d106.4143493!3d10.7546658!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529292e8d3dd1%3A0xf15f5aad773c112b!2zSOG7kyBDaMOtIE1pbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1655880825157!5m2!1svi!2s"
        style="border:0;"
        allowfullscreen="true"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="w-100"
        height="450px"
      ></iframe>
    </div>
    <div
      class="p-4 mt-3 text-center
    "
      *ngIf="this.dataAllRooms.length === 0 && !isLoading"
    >
      <div class="roompage__error--no-room">
        <div class="animate__animated animate__shakeY animate__infinite	">
          <svg
            enable-background="new 0 0 226 249.135"
            height="249.135"
            id="Layer_1"
            overflow="visible"
            viewBox="0 0 226 249.135"
            width="226"
            xml:space="preserve"
            class="sc-2s6gnf-1 bXGikU"
          >
            <circle cx="113" cy="113" fill="#FFE585" r="109"></circle>
            <line
              enable-background="new"
              fill="none"
              opacity="0.29"
              stroke="#6E6E96"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="8"
              x1="88.866"
              x2="136.866"
              y1="245.135"
              y2="245.135"
            ></line>
            <line
              enable-background="new"
              fill="none"
              opacity="0.17"
              stroke="#6E6E96"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="8"
              x1="154.732"
              x2="168.732"
              y1="245.135"
              y2="245.135"
            ></line>
            <line
              enable-background="new"
              fill="none"
              opacity="0.17"
              stroke="#6E6E96"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="8"
              x1="69.732"
              x2="58.732"
              y1="245.135"
              y2="245.135"
            ></line>
            <circle cx="68.732" cy="93" fill="#6E6E96" r="9"></circle>
            <path
              d="M115.568,5.947c-1.026,0-2.049,0.017-3.069,0.045  c54.425,1.551,98.069,46.155,98.069,100.955c0,55.781-45.219,101-101,101c-55.781,0-101-45.219-101-101  c0-8.786,1.124-17.309,3.232-25.436c-3.393,10.536-5.232,21.771-5.232,33.436c0,60.199,48.801,109,109,109s109-48.801,109-109  S175.768,5.947,115.568,5.947z"
              enable-background="new"
              fill="#FF9900"
              opacity="0.24"
            ></path>
            <circle cx="156.398" cy="93" fill="#6E6E96" r="9"></circle>
            <ellipse
              cx="67.732"
              cy="140.894"
              enable-background="new"
              fill="#FF0000"
              opacity="0.18"
              rx="17.372"
              ry="8.106"
            ></ellipse>
            <ellipse
              cx="154.88"
              cy="140.894"
              enable-background="new"
              fill="#FF0000"
              opacity="0.18"
              rx="17.371"
              ry="8.106"
            ></ellipse>
            <path
              d="M13,118.5C13,61.338,59.338,15,116.5,15c55.922,0,101.477,44.353,103.427,99.797  c0.044-1.261,0.073-2.525,0.073-3.797C220,50.802,171.199,2,111,2S2,50.802,2,111c0,50.111,33.818,92.318,79.876,105.06  C41.743,201.814,13,163.518,13,118.5z"
              fill="#FFEFB5"
            ></path>
            <circle
              cx="113"
              cy="113"
              fill="none"
              r="109"
              stroke="#6E6E96"
              stroke-width="8"
            ></circle>
          </svg>
        </div>
        <div class="mt-5">
          <div class="text-secondary h6 font-weight-light">
            Sorry, We couldn't find what you are looking for!
          </div>
          <div class="text-dart h5">PLease move the map to find more</div>
        </div>
      </div>
    </div>
    <div class="p-4" *ngIf="this.dataAllRooms.length !== 0">
      <div
        class="roompage__descripton border-bottom py-3
      "
      >
        <span class=""
          >Hon {{ this.dataAllRooms.length }} cho o tai khu vuc tren ban
          do</span
        >
      </div>
      <ng-container *ngFor="let item of this.dataAllRooms">
        <div class="roompage__room border-bottom py-3">
          <a href="/detail/{{ item['_id'] }}">
            <div class="row">
              <div class="col-12 col-md-4">
                <img
                  class="img-fluid rounded"
                  src="{{ item['image'] }}"
                  alt="{{ item['name'] }}"
                />
              </div>
              <div class="col-12 col-md-8 d-flex align-items-start flex-column">
                <div class="roompage__room--name h1 text-capitalize">
                  {{ item['name'] }}
                </div>
                <div class="roompage__room--description">
                  {{ item['description'] }}
                </div>
                <div class="roompage__room--space">
                  <span>{{ item['guests'] }}</span> Guest.
                  <span>{{ item['bedRoom'] }}</span> Bedroom.
                  <span>{{ item['bath'] }}</span> Bath.
                </div>
                <div
                  class="roompage__room--utilities mb-auto text-truncate "
                  style="max-width: 90%"
                >
                  <span
                    *ngIf="item['kitchen']"
                    class="text-capitalize border-right mr-1 pr-1"
                  >
                    kitchen
                  </span>
                  <span
                    *ngIf="item['elevator']"
                    class=" text-capitalize border-right mr-1 pr-1"
                  >
                    elevator
                  </span>
                  <span
                    *ngIf="item['hotTub']"
                    class=" text-capitalize border-right mr-1 pr-1"
                  >
                    hotTub
                  </span>
                  <span
                    *ngIf="item['pool']"
                    class="text-capitalize border-right mr-1 pr-1"
                    >pool
                  </span>
                  <span
                    *ngIf="item['indoorFireplace']"
                    class="text-capitalize border-right mr-1 pr-1"
                    >indoorFireplace
                  </span>
                  <span
                    *ngIf="item['dryer']"
                    class="text-capitalize border-right mr-1 pr-1"
                    >dryer
                  </span>
                  <span
                    *ngIf="item['gym']"
                    class="text-capitalize border-right mr-1 pr-1"
                    >gym
                  </span>
                  <span
                    *ngIf="item['heating']"
                    class="text-capitalize border-right mr-1 pr-1"
                    >heating
                  </span>
                  <span
                    *ngIf="item['wifi']"
                    class="text-capitalize border-right mr-1 pr-1"
                    >wifi
                  </span>
                  <span
                    *ngIf="item['cableTV']"
                    class="text-capitalize border-right mr-1 pr-1"
                    >cableTV
                  </span>
                </div>
                <div
                  class=" w-100 roompage__room--rating d-flex justify-content-between"
                >
                  <div>
                    <i class="fa-solid fa-star mr-1"></i>
                    <span>1</span>
                  </div>
                  <div class="">
                    $ <span> {{ item['price'] }} </span> / night
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </ng-container>
      <!-- <div class="roompage__room border-bottom py-3">
        <a href="">
          <div class="row">
            <div class="col-12 col-md-4">
              <img
                class="img-fluid rounded"
                src="https://airbnb.cybersoft.edu.vn/public/images/room/1635746941497_muongthanhnhatrang.jpg"
                alt=""
              />
            </div>
            <div class="col-12 col-md-8 d-flex align-items-start flex-column">
              <div class="roompage__room--name">HANZ Friday Hotel</div>
              <div class="roompage__room--description">
                Re noi o thoai mai tien nghi
              </div>
              <div class="roompage__room--space">
                <span>4</span> Guest. <span>2</span> Bedroom.
                <span>1</span> Bath.
              </div>
              <div class="roompage__room--utilities mb-auto">
                <span> Kichchen </span>. <span> Wifi </span>.
                <span> Gym </span>. <span> Hottub </span>.
                <span> Elevator </span>. <span> Pool </span>.
              </div>
              <div
                class=" w-100 roompage__room--rating d-flex justify-content-between"
              >
                <div>
                  <i class="fa-solid fa-star mr-1"></i>
                  <span>1</span>
                </div>
                <div class="">$ <span> 200000 </span> / night</div>
              </div>
            </div>
          </div>
        </a>
      </div> -->
    </div>
  `,
})
export class RoomsPageComponent implements OnInit {
  public paramsLocationToFindRooms: string | null = '';
  dataAllLocation = [];
  allIdLocationNeedToFindRoom: any[] = [];
  dataAllRooms: any[] = [];
  test: any;
  isLoading = true;
  constructor(
    private route: ActivatedRoute,
    private locationService: LocationService,
    private roomsService: RoomForRentService
  ) {}
  convertParamLocation(str: string | null) {
    if (str) {
      str = str.replace('Tỉnh', '');
      str = str.replace('Thành phố', '').trim();
      str = str.replace('tinh_', '');
      str = str.replace('thanh_pho_', '');
      return str;
    } else {
      return null;
    }
  }
  transformVn(str: string) {
    if (str) {
      str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
      str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
      str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
      str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
      str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
      str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
      str = str.replace(/đ/g, 'd');
      // Some system encode vietnamese combining accent as individual utf-8 characters
      str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ''); // Huyền sắc hỏi ngã nặng
      str = str.replace(/\u02C6|\u0306|\u031B/g, ''); // Â, Ê, Ă, Ơ, Ư
      str = str.replace(/\s+/g, '_');
      str = str.toLowerCase();
      return str;
    }
    return null;
  }
  getRoomsList() {}
  ngOnInit() {
    this.paramsLocationToFindRooms = this.convertParamLocation(
      this.route.snapshot.paramMap.get('locationCodeName')
    );

    console.log('get code name on url :', this.paramsLocationToFindRooms);

    this.locationService.getAllLocations().subscribe(
      (result) => {
        this.dataAllLocation = result;

        this.dataAllLocation.forEach((location, index) => {
          if (
            this.transformVn(location['province']) ==
            this.paramsLocationToFindRooms
          ) {
            // this.allIdLocationNeedToFindRoom.push(location['_id']);
            this.roomsService.getListRoomForRent(location['_id']).subscribe(
              (result) => {
                this.dataAllRooms = [...this.dataAllRooms, ...result];
                console.log(location, result);
              },
              (err) => {
                console.warn(err.error.message);
              }
            );
          }
        });
        this.isLoading = false;
      },
      (err) => {
        console.warn(err.error.message);
        this.isLoading = false;
        console.log('loading', this.isLoading);
      }
    );
  }
}
