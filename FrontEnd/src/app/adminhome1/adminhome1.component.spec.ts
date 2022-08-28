import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminhome1Component } from './adminhome1.component';

describe('Adminhome1Component', () => {
  let component: Adminhome1Component;
  let fixture: ComponentFixture<Adminhome1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Adminhome1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Adminhome1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
