import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildSecondComponent } from './child-second.component';

describe('ChildSecondComponent', () => {
  let component: ChildSecondComponent;
  let fixture: ComponentFixture<ChildSecondComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildSecondComponent]
    });
    fixture = TestBed.createComponent(ChildSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
