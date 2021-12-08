import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateToSearchComponent } from './date-to-search.component';

describe('DateToSearchComponent', () => {
  let component: DateToSearchComponent;
  let fixture: ComponentFixture<DateToSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateToSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateToSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
