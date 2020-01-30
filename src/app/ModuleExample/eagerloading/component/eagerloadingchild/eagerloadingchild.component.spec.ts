import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EagerloadingchildComponent } from './eagerloadingchild.component';

describe('EagerloadingchildComponent', () => {
  let component: EagerloadingchildComponent;
  let fixture: ComponentFixture<EagerloadingchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EagerloadingchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EagerloadingchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
