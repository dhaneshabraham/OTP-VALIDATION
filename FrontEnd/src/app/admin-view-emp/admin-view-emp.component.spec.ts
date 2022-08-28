import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewEmpComponent } from './admin-view-emp.component';

describe('AdminViewEmpComponent', () => {
  let component: AdminViewEmpComponent;
  let fixture: ComponentFixture<AdminViewEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
