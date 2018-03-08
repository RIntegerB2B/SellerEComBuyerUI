import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubContentViewComponent } from './sub-content-view.component';

describe('SubContentViewComponent', () => {
  let component: SubContentViewComponent;
  let fixture: ComponentFixture<SubContentViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubContentViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubContentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
