import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildFirstComponent } from './child-first.component';

describe('ChildFirstComponent', () => {
  let component: ChildFirstComponent;
  let fixture: ComponentFixture<ChildFirstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildFirstComponent]
    });
    fixture = TestBed.createComponent(ChildFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
