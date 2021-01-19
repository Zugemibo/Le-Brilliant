import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZabiegiWimComponent } from './zabiegi-wim.component';

describe('ZabiegiWimComponent', () => {
  let component: ZabiegiWimComponent;
  let fixture: ComponentFixture<ZabiegiWimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZabiegiWimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZabiegiWimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
