import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightTransportComponent } from './flight-transport.component';

describe('FlightTransportComponent', () => {
  let component: FlightTransportComponent;
  let fixture: ComponentFixture<FlightTransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlightTransportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlightTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
