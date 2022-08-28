import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmyHomeStudComponent } from './editmy-home-stud.component';

describe('EditmyHomeStudComponent', () => {
  let component: EditmyHomeStudComponent;
  let fixture: ComponentFixture<EditmyHomeStudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditmyHomeStudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmyHomeStudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
