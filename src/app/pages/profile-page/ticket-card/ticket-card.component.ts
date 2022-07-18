import { Component, Input, OnInit } from '@angular/core';
import { TicketService } from 'src/app/service/ticket/ticket.service';

@Component({
  selector: 'app-ticket-card',
  // templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.css'],
  template: `
    <div
      class="ticket-card py-2 border-bottom"
      *ngIf="this.dataInfoticket.roomId"
    >
      <div class="row p-3">
        <div class="col-12 col-md-6 col-lg-4 ticket-card__img ">
          <img
            class="w-100 rounded"
            src="{{ this.dataInfoticket.roomId['image'] }}"
            alt="{{ this.dataInfoticket.roomId.name }}"
          />
          <div class="ticket-card__date text-center mt-1">
            <span>
              {{ this.dataInfoticket.checkIn | date: 'shortDate' }}
            </span>
            -
            <span>
              {{ this.dataInfoticket.checkOut | date: 'shortDate' }}
            </span>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-8">
          <h3 class="h5">
            {{ this.dataInfoticket.roomId.name }}
          </h3>
          <div>
            {{
              this.dataInfoticket.roomId.description.length > 30
                ? (this.dataInfoticket.roomId.description | slice: 0:30) + '...'
                : this.dataInfoticket.roomId.description
            }}
          </div>
        </div>
      </div>
    </div>
  `,
})
export class TicketCardComponent implements OnInit {
  @Input() ticketId!: string;
  dataInfoticket: any = {};

  constructor(private ticketService: TicketService) {}

  ngOnInit() {
    this.ticketService.getInfoTicket(this.ticketId).subscribe(
      (res) => {
        this.dataInfoticket = res;
        console.log(res);
      },
      (err) => console.log(err)
    );
  }
}
