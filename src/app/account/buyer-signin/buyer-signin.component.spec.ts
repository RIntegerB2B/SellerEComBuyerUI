import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerSigninComponent } from './buyer-signin.component';

describe('BuyerSigninComponent', () => {
  let component: BuyerSigninComponent;
  let fixture: ComponentFixture<BuyerSigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerSigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
