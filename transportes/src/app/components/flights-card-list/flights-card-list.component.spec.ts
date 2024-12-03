import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsCardListComponent } from './flights-card-list.component';

describe('FlightsCardListComponent', () => {
  let component: FlightsCardListComponent;
  let fixture: ComponentFixture<FlightsCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlightsCardListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlightsCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
