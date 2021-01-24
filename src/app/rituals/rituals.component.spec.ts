import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RitualsComponent } from './rituals.component';

describe('RitualsComponent', () => {
  let component: RitualsComponent;
  let fixture: ComponentFixture<RitualsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RitualsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RitualsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
