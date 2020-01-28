import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EagerloadingcomComponent } from './eagerloadingcom.component';

describe('EagerloadingcomComponent', () => {
  let component: EagerloadingcomComponent;
  let fixture: ComponentFixture<EagerloadingcomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EagerloadingcomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EagerloadingcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
