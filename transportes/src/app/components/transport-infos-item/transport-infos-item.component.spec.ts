import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportInfosItemComponent } from './transport-infos-item.component';

describe('TransportInfosItemComponent', () => {
  let component: TransportInfosItemComponent;
  let fixture: ComponentFixture<TransportInfosItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransportInfosItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransportInfosItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
