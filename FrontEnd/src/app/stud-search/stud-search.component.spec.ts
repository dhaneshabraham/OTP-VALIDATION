import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudSearchComponent } from './stud-search.component';

describe('StudSearchComponent', () => {
  let component: StudSearchComponent;
  let fixture: ComponentFixture<StudSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
