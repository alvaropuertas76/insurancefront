import { TestBed } from '@angular/core/testing';

import { PolizaTriatlonService } from './poliza-triatlon.service';

describe('WheatherService', () => {
  let service: PolizaTriatlonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolizaTriatlonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
