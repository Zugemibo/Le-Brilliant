import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoskComponent } from './wosk.component';

describe('WoskComponent', () => {
  let component: WoskComponent;
  let fixture: ComponentFixture<WoskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WoskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
