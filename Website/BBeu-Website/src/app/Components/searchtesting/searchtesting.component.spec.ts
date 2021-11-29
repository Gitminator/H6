import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchtestingComponent } from './searchtesting.component';

describe('SearchtestingComponent', () => {
  let component: SearchtestingComponent;
  let fixture: ComponentFixture<SearchtestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchtestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchtestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
