import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Accommondation } from './accommondation';

describe('Accommondation', () => {
  let component: Accommondation;
  let fixture: ComponentFixture<Accommondation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Accommondation],
    }).compileComponents();

    fixture = TestBed.createComponent(Accommondation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
