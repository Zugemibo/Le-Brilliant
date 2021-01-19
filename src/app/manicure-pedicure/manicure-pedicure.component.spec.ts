import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManicurePedicureComponent } from './manicure-pedicure.component';

describe('ManicurePedicureComponent', () => {
  let component: ManicurePedicureComponent;
  let fixture: ComponentFixture<ManicurePedicureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManicurePedicureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManicurePedicureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
