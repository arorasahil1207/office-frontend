import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchexpenseComponent } from './searchexpense.component';

describe('SearchexpenseComponent', () => {
  let component: SearchexpenseComponent;
  let fixture: ComponentFixture<SearchexpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchexpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchexpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
