import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addproducts } from './addproducts';

describe('Addproducts', () => {
  let component: Addproducts;
  let fixture: ComponentFixture<Addproducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addproducts],
    }).compileComponents();

    fixture = TestBed.createComponent(Addproducts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
