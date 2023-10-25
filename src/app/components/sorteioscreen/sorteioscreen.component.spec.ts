import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorteioscreenComponent } from './sorteioscreen.component';

describe('SorteioscreenComponent', () => {
  let component: SorteioscreenComponent;
  let fixture: ComponentFixture<SorteioscreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SorteioscreenComponent]
    });
    fixture = TestBed.createComponent(SorteioscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
