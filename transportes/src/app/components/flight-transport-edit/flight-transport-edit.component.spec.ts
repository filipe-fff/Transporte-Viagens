import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightTransportEditComponent } from './flight-transport-edit.component';

describe('FlightTransportEditComponent', () => {
  let component: FlightTransportEditComponent;
  let fixture: ComponentFixture<FlightTransportEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlightTransportEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlightTransportEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
