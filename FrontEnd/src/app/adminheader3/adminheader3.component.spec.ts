import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminheader3Component } from './adminheader3.component';

describe('Adminheader3Component', () => {
  let component: Adminheader3Component;
  let fixture: ComponentFixture<Adminheader3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Adminheader3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Adminheader3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
