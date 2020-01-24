import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemlateDrivenComponent } from './temlate-driven.component';

describe('TemlateDrivenComponent', () => {
  let component: TemlateDrivenComponent;
  let fixture: ComponentFixture<TemlateDrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemlateDrivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemlateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
