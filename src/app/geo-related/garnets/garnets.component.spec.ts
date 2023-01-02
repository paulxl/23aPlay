import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarnetsComponent } from './garnets.component';

describe('GarnetsComponent', () => {
  let component: GarnetsComponent;
  let fixture: ComponentFixture<GarnetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GarnetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GarnetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
