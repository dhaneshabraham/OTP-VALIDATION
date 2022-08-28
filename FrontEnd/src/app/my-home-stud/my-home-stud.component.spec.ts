import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHomeStudComponent } from './my-home-stud.component';

describe('MyHomeStudComponent', () => {
  let component: MyHomeStudComponent;
  let fixture: ComponentFixture<MyHomeStudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyHomeStudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHomeStudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
