import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoesUpdateComponent } from './shoes-update.component';

describe('ShoesUpdateComponent', () => {
  let component: ShoesUpdateComponent;
  let fixture: ComponentFixture<ShoesUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoesUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
