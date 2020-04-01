import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticesectionComponent } from './practicesection.component';

describe('PracticesectionComponent', () => {
  let component: PracticesectionComponent;
  let fixture: ComponentFixture<PracticesectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticesectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticesectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
