import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-footer',
  //templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  //styles: ['hvr-underline-from-left::before { background: pink; } '],
  template: `
    <div class="footer">
      <div class="container py-3">
        <div class="row  p-lg-6">
          <div class="col-12 col-lg-3 border-bottom text-lg-center py-3">
            <h6 class="h6 font-weight-bold">Hỗ Trợ</h6>
            <div class="row">
              <div class="col-12 col-md-4 col-lg-12 font-weight-normal">
                <a
                  href=""
                  class="text-dark hvr-underline-from-left footer__link py-2"
                >
                  Trung tâm trợ giúp
                </a>
              </div>
              <div class="col-12 col-md-4 col-lg-12 font-weight-normal">
                <a
                  href=""
                  class="text-dark hvr-underline-from-left footer__link py-2"
                >
                  Thông tin an toàn</a
                >
              </div>
              <div class="col-12 col-md-4 col-lg-12 font-weight-normal">
                <a
                  href=""
                  class="text-dark hvr-underline-from-left footer__link py-2"
                >
                  Các tuỳ chọn huỷ
                </a>
              </div>
              <div class="col-12 col-md-4 col-lg-12 font-weight-normal">
                <a
                  href=""
                  class="text-dark hvr-underline-from-left footer__link py-2"
                >
                  Biện pháp ứng phó với đại dịch COVID-19 của chúng tôi
                </a>
              </div>
              <div class="col-12 col-md-4 col-lg-12 font-weight-normal">
                <a
                  href=""
                  class="text-dark hvr-underline-from-left footer__link py-2"
                >
                  Hỗ trợ người khuyết tật
                </a>
              </div>
              <div class="col-12 col-md-4 col-lg-12 font-weight-normal">
                <a
                  href=""
                  class="text-dark hvr-underline-from-left footer__link py-2"
                >
                  Báo cáo lo ngại của hàng xóm
                </a>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-3 border-bottom text-lg-center py-3">
            <h6 class="h6 font-weight-bold">Cộng đồng</h6>
            <div class="row">
              <div class="col-12 col-md-4 col-lg-12 font-weight-normal">
                <a
                  href=""
                  class="text-dark hvr-underline-from-left footer__link py-2"
                >
                  Airbnb.org: nhà ở cứu trợ
                </a>
              </div>
              <div class="col-12 col-md-4 col-lg-12 font-weight-normal">
                <a
                  href=""
                  class="text-dark hvr-underline-from-left footer__link py-2"
                >
                  Hỗ trợ dân tị nạn Afghanistan
                </a>
              </div>
              <div class="col-12 col-md-4 col-lg-12 font-weight-normal">
                <a
                  href=""
                  class="text-dark hvr-underline-from-left footer__link py-2"
                >
                  Chống phân biệt đối xử
                </a>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-3 border-bottom text-lg-center py-3">
            <h6 class="h6 font-weight-bold">Đón tiếp khách</h6>
            <div class="row">
              <div class="col-12 col-md-4 col-lg-12 font-weight-normal">
                <a
                  href=""
                  class="text-dark hvr-underline-from-left footer__link py-2"
                >
                  Thử đón tiếp khách
                </a>
              </div>
              <div class="col-12 col-md-4 col-lg-12 font-weight-normal">
                <a
                  href=""
                  class="text-dark hvr-underline-from-left footer__link py-2"
                >
                  Truy cập diễn đàn cộng đồng
                </a>
              </div>
              <div class="col-12 col-md-4 col-lg-12 font-weight-normal">
                <a
                  href=""
                  class="text-dark hvr-underline-from-left footer__link py-2"
                >
                  Aircover: bảo vệ cho Host
                </a>
              </div>
              <div class="col-12 col-md-4 col-lg-12 font-weight-normal">
                <a
                  href=""
                  class="text-dark hvr-underline-from-left footer__link py-2"
                >
                  Đón tiếp khách có trách nhiệm
                </a>
              </div>
              <div class="col-12 col-md-4 col-lg-12 font-weight-normal">
                <a
                  href=""
                  class="text-dark hvr-underline-from-left footer__link py-2"
                >
                  Xem tài nguyên đón tiếp khách
                </a>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-3 border-bottom text-lg-center py-3">
            <h6 class="h6 font-weight-bold">Giới thiệu</h6>
            <div class="row">
              <div class="col-12 col-md-4 col-lg-12 font-weight-normal">
                <a
                  href=""
                  class="text-dark hvr-underline-from-left footer__link py-2"
                >
                  Trang tin tức
                </a>
              </div>
              <div class="col-12 col-md-4 col-lg-12 font-weight-normal">
                <a
                  href=""
                  class="text-dark hvr-underline-from-left footer__link py-2"
                >
                  Tìm hiểu các tính năng mới
                </a>
              </div>
              <div class="col-12 col-md-4 col-lg-12 font-weight-normal">
                <a
                  href=""
                  class="text-dark hvr-underline-from-left footer__link py-2"
                >
                  Thư ngỏ từ các nhà sáng lập
                </a>
              </div>
              <div class="col-12 col-md-4 col-lg-12 font-weight-normal">
                <a
                  href=""
                  class="text-dark hvr-underline-from-left footer__link py-2"
                >
                  Cơ hội nghề nghiệp
                </a>
              </div>
              <div class="col-12 col-md-4 col-lg-12 font-weight-normal">
                <a
                  href=""
                  class="text-dark hvr-underline-from-left footer__link py-2"
                >
                  Nhà đầu tư
                </a>
              </div>
              <div class="col-12 col-md-4 col-lg-12 font-weight-normal">
                <a
                  href=""
                  class="text-dark hvr-underline-from-left footer__link py-2"
                >
                  Airbnb Luxe
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
