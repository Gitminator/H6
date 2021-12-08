import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateFromSearchComponent } from './date-from-search.component';

describe('DateFromSearchComponent', () => {
  let component: DateFromSearchComponent;
  let fixture: ComponentFixture<DateFromSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateFromSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateFromSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
