import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThalgoComponent } from './thalgo.component';

describe('ThalgoComponent', () => {
  let component: ThalgoComponent;
  let fixture: ComponentFixture<ThalgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThalgoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThalgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
