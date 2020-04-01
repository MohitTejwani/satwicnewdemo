import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemosectionComponent } from './demosection.component';

describe('DemosectionComponent', () => {
  let component: DemosectionComponent;
  let fixture: ComponentFixture<DemosectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemosectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemosectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
