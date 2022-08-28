import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpgenerationComponent } from './otpgeneration.component';

describe('OtpgenerationComponent', () => {
  let component: OtpgenerationComponent;
  let fixture: ComponentFixture<OtpgenerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtpgenerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpgenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
