import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardContractorsComponent } from './dashboard-contractors.component';

describe('DashboardContractorsComponent', () => {
  let component: DashboardContractorsComponent;
  let fixture: ComponentFixture<DashboardContractorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardContractorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardContractorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
