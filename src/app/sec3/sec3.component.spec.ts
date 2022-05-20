import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec3Component } from './sec3.component';

describe('Sec3Component', () => {
  let component: Sec3Component;
  let fixture: ComponentFixture<Sec3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sec3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sec3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
