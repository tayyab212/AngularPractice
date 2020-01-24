import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareregistrationComponent } from './softwareregistration.component';

describe('SoftwareregistrationComponent', () => {
  let component: SoftwareregistrationComponent;
  let fixture: ComponentFixture<SoftwareregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
