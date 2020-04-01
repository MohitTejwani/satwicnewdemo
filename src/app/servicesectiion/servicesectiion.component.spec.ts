import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesectiionComponent } from './servicesectiion.component';

describe('ServicesectiionComponent', () => {
  let component: ServicesectiionComponent;
  let fixture: ComponentFixture<ServicesectiionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesectiionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesectiionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
