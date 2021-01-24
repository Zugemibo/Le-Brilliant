import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PakietyComponent } from './pakiety.component';

describe('PakietyComponent', () => {
  let component: PakietyComponent;
  let fixture: ComponentFixture<PakietyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PakietyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PakietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
