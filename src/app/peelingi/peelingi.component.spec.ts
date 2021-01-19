import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeelingiComponent } from './peelingi.component';

describe('PeelingiComponent', () => {
  let component: PeelingiComponent;
  let fixture: ComponentFixture<PeelingiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeelingiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeelingiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
