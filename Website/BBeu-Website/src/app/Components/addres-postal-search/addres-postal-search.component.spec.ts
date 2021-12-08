import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddresPostalSearchComponent } from './addres-postal-search.component';

describe('AddresPostalSearchComponent', () => {
  let component: AddresPostalSearchComponent;
  let fixture: ComponentFixture<AddresPostalSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddresPostalSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddresPostalSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
