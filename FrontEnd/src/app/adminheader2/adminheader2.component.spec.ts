import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminheader2Component } from './adminheader2.component';

describe('Adminheader2Component', () => {
  let component: Adminheader2Component;
  let fixture: ComponentFixture<Adminheader2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Adminheader2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Adminheader2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
