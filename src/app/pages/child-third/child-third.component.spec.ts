import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildThirdComponent } from './child-third.component';

describe('ChildThirdComponent', () => {
  let component: ChildThirdComponent;
  let fixture: ComponentFixture<ChildThirdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildThirdComponent]
    });
    fixture = TestBed.createComponent(ChildThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
