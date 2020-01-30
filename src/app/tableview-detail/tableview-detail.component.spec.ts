import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableviewDetailComponent } from './tableview-detail.component';

describe('TableviewDetailComponent', () => {
  let component: TableviewDetailComponent;
  let fixture: ComponentFixture<TableviewDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableviewDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableviewDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
