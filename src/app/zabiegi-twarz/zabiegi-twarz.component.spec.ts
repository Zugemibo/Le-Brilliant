import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZabiegiTwarzComponent } from './zabiegi-twarz.component';

describe('ZabiegiTwarzComponent', () => {
  let component: ZabiegiTwarzComponent;
  let fixture: ComponentFixture<ZabiegiTwarzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZabiegiTwarzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZabiegiTwarzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
