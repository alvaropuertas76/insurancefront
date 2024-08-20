import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolizaTriatlonComponent } from './poliza-triatlon.component';

describe('PolizaTriatlonComponent', () => {
  let component: PolizaTriatlonComponent;
  let fixture: ComponentFixture<PolizaTriatlonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolizaTriatlonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolizaTriatlonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
