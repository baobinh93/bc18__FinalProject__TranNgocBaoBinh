/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RoomForRentService } from './roomForRent.service';

describe('Service: RoomForRent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoomForRentService]
    });
  });

  it('should ...', inject([RoomForRentService], (service: RoomForRentService) => {
    expect(service).toBeTruthy();
  }));
});
