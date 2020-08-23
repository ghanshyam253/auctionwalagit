import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAssetListComponent } from './page-asset-list.component';

describe('PageAssetListComponent', () => {
  let component: PageAssetListComponent;
  let fixture: ComponentFixture<PageAssetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAssetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAssetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
