import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationalsectionComponent } from './operationalsection.component';

describe('OperationalsectionComponent', () => {
  let component: OperationalsectionComponent;
  let fixture: ComponentFixture<OperationalsectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationalsectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationalsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
