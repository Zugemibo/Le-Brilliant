import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyeStylingComponent } from './eye-styling.component';

describe('EyeStylingComponent', () => {
  let component: EyeStylingComponent;
  let fixture: ComponentFixture<EyeStylingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EyeStylingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EyeStylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
