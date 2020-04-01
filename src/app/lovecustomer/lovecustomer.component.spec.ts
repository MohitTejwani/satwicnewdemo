import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LovecustomerComponent } from './lovecustomer.component';

describe('LovecustomerComponent', () => {
  let component: LovecustomerComponent;
  let fixture: ComponentFixture<LovecustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LovecustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LovecustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
