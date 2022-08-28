import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdatestudentComponent } from './admin-updatestudent.component';

describe('AdminUpdatestudentComponent', () => {
  let component: AdminUpdatestudentComponent;
  let fixture: ComponentFixture<AdminUpdatestudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUpdatestudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUpdatestudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
