import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportContainerComponent } from './transport-container.component';

describe('TransportContainerComponent', () => {
  let component: TransportContainerComponent;
  let fixture: ComponentFixture<TransportContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransportContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransportContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
