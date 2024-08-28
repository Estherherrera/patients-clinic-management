import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConsultationsComponent } from './form-consultations.component';

describe('FormConsultationsComponent', () => {
  let component: FormConsultationsComponent;
  let fixture: ComponentFixture<FormConsultationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormConsultationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormConsultationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
