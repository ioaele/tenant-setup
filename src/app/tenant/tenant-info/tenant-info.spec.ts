import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantInfo } from './tenant-info';

describe('TenantInfo', () => {
  let component: TenantInfo;
  let fixture: ComponentFixture<TenantInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TenantInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(TenantInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
