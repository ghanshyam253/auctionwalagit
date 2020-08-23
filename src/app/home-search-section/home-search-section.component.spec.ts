import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSearchSectionComponent } from './home-search-section.component';

describe('HomeSearchSectionComponent', () => {
  let component: HomeSearchSectionComponent;
  let fixture: ComponentFixture<HomeSearchSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSearchSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSearchSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
