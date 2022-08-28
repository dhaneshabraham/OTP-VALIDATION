import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHomeStudProfileComponent } from './my-home-stud-profile.component';

describe('MyHomeStudProfileComponent', () => {
  let component: MyHomeStudProfileComponent;
  let fixture: ComponentFixture<MyHomeStudProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyHomeStudProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHomeStudProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
