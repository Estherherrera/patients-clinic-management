import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVitalsComponent } from './form-vitals.component';

describe('FormVitalsComponent', () => {
  let component: FormVitalsComponent;
  let fixture: ComponentFixture<FormVitalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormVitalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormVitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
