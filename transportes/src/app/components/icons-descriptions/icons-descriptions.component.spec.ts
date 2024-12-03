import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsDescriptionsComponent } from './icons-descriptions.component';

describe('IconsDescriptionsComponent', () => {
  let component: IconsDescriptionsComponent;
  let fixture: ComponentFixture<IconsDescriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconsDescriptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IconsDescriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
