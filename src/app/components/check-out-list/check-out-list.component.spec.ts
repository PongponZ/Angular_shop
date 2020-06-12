import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOutListComponent } from './check-out-list.component';

describe('CheckOutListComponent', () => {
  let component: CheckOutListComponent;
  let fixture: ComponentFixture<CheckOutListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckOutListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckOutListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
