import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec2pricingComponent } from './sec2pricing.component';

describe('Sec2pricingComponent', () => {
  let component: Sec2pricingComponent;
  let fixture: ComponentFixture<Sec2pricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sec2pricingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sec2pricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
