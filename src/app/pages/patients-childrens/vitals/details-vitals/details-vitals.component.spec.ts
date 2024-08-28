import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsVitalsComponent } from './details-vitals.component';

describe('DetailsVitalsComponent', () => {
  let component: DetailsVitalsComponent;
  let fixture: ComponentFixture<DetailsVitalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsVitalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsVitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
